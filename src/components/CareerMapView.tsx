import React, { useState, useEffect, useRef } from "react";
import "./CareerMapView.css";
import type { CareerMap } from "../domain/types";
import { canEnroll, canApprove, getMissingReasons } from "../domain/unlock";
import {
  advanceSubjectState,
  loadProgress,
  resetProgress,
  saveProgress,
  type Progress,
} from "../storage/progress";


interface Props {
  map: CareerMap;
}

export const CareerMapView: React.FC<Props> = ({ map }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>(() => loadProgress(map));

  // Recargar progreso si cambia el mapa activo
  // ...existing code...
  React.useEffect(() => {
    setProgress(loadProgress(map));
    // No modificar lastPersistedSnapshot aquí
  }, [map]);
  const lastPersistedSnapshot = useRef<string>(JSON.stringify(progress));
  const states = progress.states;
  // Agrupar materias por cuatrimestre consecutivo
  const cuatMap: Record<number, import("../domain/types").SubjectNode[]> = {};
  for (const node of map.nodes) {
    if (typeof node.cuatrimestre === 'number') {
      if (!cuatMap[node.cuatrimestre]) cuatMap[node.cuatrimestre] = [];
      cuatMap[node.cuatrimestre].push(node);
    }
  }
  function handleReset() {
    setProgress(() => resetProgress(map));
  }


  // Persistencia centralizada
  useEffect(() => {
    const snapshot = JSON.stringify(progress);
    if (snapshot === lastPersistedSnapshot.current) {
      return;
    }
    saveProgress(progress);
    // No modificar lastPersistedSnapshot aquí
  }, [progress]);

  return (
    <div className="container-fluid py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="h3 fw-bold mb-0">{map.name}</h1>
                <div className="d-flex align-items-center gap-2">
                  <button type="button" onClick={handleReset} className="btn btn-outline-danger btn-sm">
                    Reset progreso
                  </button>
                </div>
              </div>
              {/* Mapa de materias por cuatrimestre consecutivo con títulos de año */}
              {(() => {
                // Obtener el año de cada cuatrimestre (usando el primer nodo de cada cuatrimestre)
                const cuatKeys = Object.keys(cuatMap).sort((a, b) => Number(a) - Number(b));
                // Generar una lista de objetos con cuatrimestre, nodos y si hay que mostrar el año
                const cuatList = cuatKeys.map((cuatStr, idx) => {
                  const cuat = Number(cuatStr);
                  const nodes = cuatMap[cuat];
                  const year = nodes[0]?.year;
                  // Mostrar el año si es el primero o si cambia respecto al anterior
                  const prevYear = idx > 0 ? cuatMap[Number(cuatKeys[idx - 1])][0]?.year : null;
                  const showYear = year !== prevYear;
                  return { cuat, nodes, year, showYear };
                });
                return cuatList.map(({ cuat, nodes, year, showYear }) => (
                  <React.Fragment key={cuat}>
                    {showYear && (
                      <h4 className="mt-4 mb-2">Año {year}</h4>
                    )}
                    <div className="mb-4">
                      <h5 className="mb-2">Cuatrimestre {cuat}</h5>
                      <div className="d-flex flex-wrap gap-2 align-items-start subjectsRow">
                        {nodes.map((node: import("../domain/types").SubjectNode) => {
                          const state = states[node.id];
                          const canEnrollNow = canEnroll(node, map, states);
                          const canApproveNow = canApprove(node, map, states);
                          let bg = "#f7f7fa", border = "#e0e0e0";
                          if (state === "APROBADA") { bg = "#d1f5e2"; border = "#15803d"; }
                          else if (state === "REGULAR") { bg = "#fffbe6"; border = "#facc15"; }
                          else if (state === "CURSANDO") { bg = "#dbeafe"; border = "#2563eb"; }
                          else if (state === "NO_APROBADA") { bg = "#f3f4f6"; border = "#cbd5e1"; }
                          // Deshabilitar botón si no puede cursar o aprobar según estado
                          let disabled = false;
                          if (state === "NO_APROBADA" && !canEnrollNow) disabled = true;
                          if (state === "REGULAR" && !canApproveNow) disabled = true;
                          return (
                            <div
                              className="nodeWrapper"
                              style={{ position: 'relative' }}
                              key={node.id}
                              onMouseEnter={() => setHoveredId(node.id)}
                              onMouseLeave={() => setHoveredId(null)}
                            >
                              <button
                                className={`node btn text-truncate mb-2 state-${state}${disabled ? ' opacity-50' : ''}`}
                                type="button"
                                disabled={disabled}
                                style={{
                                  background: bg,
                                  border: `2px solid ${border}`,
                                  fontWeight: 500,
                                  fontSize: 15,
                                  borderRadius: 12,
                                  minHeight: 38,
                                  maxHeight: 60,
                                  color: "#111",
                                  minWidth: 180,
                                  maxWidth: 260,
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                                onClick={() => {
                                  setProgress((prev) => advanceSubjectState(map, prev, node.id));
                                }}
                              >
                                <span>{node.name}</span>
                              </button>
                              {hoveredId === node.id && (
                                <div className="cmTooltip">
                                  <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 2 }}>{node.name}</div>
                                  <div style={{ marginBottom: 4 }}>
                                    Estado: <b>{
                                      state === "APROBADA"
                                        ? "Aprobada"
                                        : state === "REGULAR"
                                          ? "Regular"
                                          : state === "CURSANDO"
                                            ? "Cursando"
                                            : "No aprobada"
                                    }</b>
                                  </div>
                                  <div style={{ marginBottom: 4 }}>
                                    Puede cursar: <b>{canEnrollNow ? "Sí" : "No"}</b>
                                  </div>
                                  <div style={{ marginBottom: 4 }}>
                                    Puede aprobar: <b>{canApproveNow ? "Sí" : "No"}</b>
                                  </div>
                                  {/* Motivos para cursar o aprobar según estado */}
                                  {(state === "NO_APROBADA" && !canEnrollNow) && (
                                    <div style={{ marginTop: 6 }}>
                                      <div style={{ color: "#b91c1c", fontWeight: 500, fontSize: 14, marginBottom: 2 }}>
                                        Requisitos para cursar faltantes:
                                      </div>
                                      <ul style={{ color: "#d32f2f", fontSize: 14, margin: 0, paddingLeft: 18, listStyle: "disc inside" }}>
                                        {(() => {
                                          // Aquí deberías tener getMissingReasonsCursar
                                          // Por compatibilidad, usa getMissingReasons pero adaptado
                                          const reasons = getMissingReasons(node, map, states); // Si tienes getMissingReasonsCursar, úsalo
                                          if (reasons.some(r => r.includes("años anteriores"))) {
                                            return <li key="prev">Falta aprobar todas las materias de años anteriores</li>;
                                          }
                                          if (reasons.length > 0) {
                                            return reasons.map((r, i) => <li key={i}>{r.replace(/^Falta (REGULAR|APROBADA) en: /, "")}</li>);
                                          }
                                          return <li key="ok">Sin correlativas pendientes</li>;
                                        })()}
                                      </ul>
                                    </div>
                                  )}
                                  {(state === "REGULAR" && !canApproveNow) && (
                                    <div style={{ marginTop: 6 }}>
                                      <div style={{ color: "#b91c1c", fontWeight: 500, fontSize: 14, marginBottom: 2 }}>
                                        Requisitos para aprobar faltantes:
                                      </div>
                                      <ul style={{ color: "#d32f2f", fontSize: 14, margin: 0, paddingLeft: 18, listStyle: "disc inside" }}>
                                        {(() => {
                                          // Aquí deberías tener getMissingReasonsAprobar
                                          // Por compatibilidad, usa getMissingReasons pero adaptado
                                          const reasons = getMissingReasons(node, map, states); // Si tienes getMissingReasonsAprobar, úsalo
                                          if (reasons.some(r => r.includes("años anteriores"))) {
                                            return <li key="prev">Falta aprobar todas las materias de años anteriores</li>;
                                          }
                                          if (reasons.length > 0) {
                                            return reasons.map((r, i) => <li key={i}>{r.replace(/^Falta (REGULAR|APROBADA) en: /, "")}</li>);
                                          }
                                          return <li key="ok">Sin correlativas pendientes</li>;
                                        })()}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
