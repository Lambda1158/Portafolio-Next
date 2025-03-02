import React from 'react';
import Datos from '../../../mock/data';
export default function Experience() {
  return (
    <section id="Experiencia" className="mt-12 w-11/12 mx-auto">
      <h1 className=" text-5xl text-accent dark:text-daccent font-bold ">
        Experiencia laboral
      </h1>
      <ul className="ml-6 list-disc mt-6 list-inside space-y-8 p-2">
        {Datos.Experiencia.map((item, index) => {
          return (
            <li
              className="grid grid-cols-2 celular:grid-cols-1  mx-auto"
              key={index}
            >
              <div>
                <h1 className="text-2xl font-light">{item.title}</h1>
                <h2>{item.subtitle}</h2>
                <span>{item.duration}</span>
              </div>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
