// État initial du formulaire
export const INITIAL_FORM_DATA = {
  nom: '',
  prenom: '',
  age: '',
  email: '',
  adresse: '',
  naissance: '',
  pays: '',
  nationalite: '',
  telephone: '',
  formation: '',
};

// Messages de statut
export const STATUS_MESSAGES = {
  LOADING: 'Envoi en cours...',
  SUCCESS: 'Message envoyé avec succès !',
  ERROR: 'Une erreur est survenue. Veuillez réessayer.',
};

// Classes CSS réutilisables
export const CSS_CLASSES = {
  INPUT: "peer w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-400 focus:outline-none transition-all duration-200",
  
  LABEL: `absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
           peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
           peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-violet-400`,

  LABEL_DATE: `absolute left-3 top-3 text-gray-500 text-base transition-all duration-200 pointer-events-none bg-white px-1
               peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-400
               peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:scale-75 peer-[&:not(:placeholder-shown)]:text-violet-400
               peer-[&[value]:not([value=''])]:-translate-y-6 peer-[&[value]:not([value=''])]:scale-75 peer-[&[value]:not([value=''])]:text-violet-400`,
  
  STATUS_SUCCESS: 'bg-green-100 text-green-700 border border-green-200',
  STATUS_ERROR: 'bg-red-100 text-red-700 border border-red-200',
  STATUS_LOADING: 'bg-blue-100 text-blue-700 border border-blue-200',
};