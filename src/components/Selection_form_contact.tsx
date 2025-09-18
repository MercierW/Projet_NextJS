"use client";

import { Fragment } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

type FormationOption = {
  value: string;
  label: string;
};

const formations: FormationOption[] = [
  { value: "HCR", label: "Formation HCR (Hôtellerie-Cafés-Restaurants)" },
  { value: "PSR", label: "Formation PSR (Production et Service en Restaurations collectives)" },
  { value: "AEPE", label: "Formation AEPE (Accompagnant Éducatif Petite Enfance)" },
  { value: "CDA", label: "Formation CDA (Concepteur Développeur d'Applications)" },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function FormationSelect({ value, onChange }: Props) {
  return (
    <div className="relative md:col-span-2">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            {/* Label flottant */}
            <label
              htmlFor="formation"
              className={`absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
                ${open || value
                  ? "-translate-y-6 scale-75 text-violet-400"
                  : ""}`}
            >
              Formation
            </label>

            {/* Bouton du select */}
            <ListboxButton
              id="formation"
              className="peer w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 bg-white 
                        focus:ring-2 focus:ring-violet-400 focus:outline-none text-gray-700 
                        transition-all duration-300 ease-in-out cursor-pointer 
                        hover:border-violet-300 focus:border-violet-400 shadow-sm 
                        hover:shadow-md focus:shadow-lg"
            >
              <span className={value ? "text-gray-900" : "text-gray-400"}>
                {value
                  ? formations.find((f) => f.value === value)?.label
                  : "Sélectionnez une formation"}
              </span>

              {/* Flèche */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200">
                <ChevronDown
                  className={`w-5 h-5 text-violet-400 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </span>
            </ListboxButton>

            {/* Options */}
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
            >
              <ListboxOptions
                modal={false} // 🎯 Clé pour désactiver le scroll lock
                className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl border-2 border-violet-200 bg-white py-2 shadow-xl focus:outline-none"
              >
                {formations.map((formation, index) => (
                  <ListboxOption
                    key={formation.value}
                    value={formation.value}
                    className={({ active, selected }) =>
                      `relative cursor-pointer select-none py-4 pl-10 pr-4 text-gray-700 transition-colors duration-200 font-medium
                      ${active ? "bg-violet-50 text-violet-700" : ""}
                      ${selected ? "bg-violet-100 text-violet-700" : ""}
                      ${index < formations.length - 1 ? "border-b border-violet-100" : ""}
                      ${index === 0 ? "rounded-t-lg" : ""}
                      ${index === formations.length - 1 ? "rounded-b-lg" : ""}`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-medium"
                          }`}
                        >
                          {formation.label}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-3 flex items-center text-violet-500">
                            <Check className="w-5 h-5" />
                          </span>
                        )}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
}