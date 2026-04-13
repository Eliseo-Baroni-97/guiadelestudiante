
import React from "react";
import { careers } from "../data/careers";
import type { CareerMap, SubjectNode, Prereq } from "../domain/types";

const getSubjectName = (career: CareerMap, subjectId: string): string => {
  const subject = career.nodes.find((n: SubjectNode) => n.id === subjectId);
  return subject ? subject.name : subjectId;
};

const GuiaCorrelativas: React.FC = () => (
  <section style={{ padding: "2rem" }}>
    <h2>Guía de Correlativas</h2>
    <p>
      Aquí podrás consultar las correlatividades entre materias de las distintas carreras.
    </p>
    {careers.map((career: CareerMap) => (
      <div key={career.id} style={{ marginBottom: "2rem" }}>
        <h3>{career.name}</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Materia</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Correlativas</th>
            </tr>
          </thead>
          <tbody>
            {career.nodes.map((node: SubjectNode) => {
              const correlativas: Prereq[] = node.correlativasCursar || node.correlativasAprobar || node.correlativas || [];
              return (
                <tr key={node.id}>
                  <td style={{ padding: "0.5rem 0" }}>{node.name}</td>
                  <td style={{ padding: "0.5rem 0" }}>
                    {correlativas.length === 0
                      ? <span style={{ color: "#888" }}>Sin correlativas</span>
                      : correlativas.map((c: Prereq, i: number) => (
                        <span key={c.subjectId + c.requiredState}>
                          {getSubjectName(career, c.subjectId)} ({c.requiredState}){i < correlativas.length - 1 ? ", " : ""}
                        </span>
                      ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    ))}
  </section>
);

export default GuiaCorrelativas;
