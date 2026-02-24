import { createStore } from "zustand/vanilla"; // Função de criação do zustand

export type User = {
  // Tipando nosso objeto e ja dizendo as funções que ele terá
  user: {
    userName: string;
    password: string;
    age: number;
  };

  changeName: (name: string) => void;
  changePassword: (pass: string) => void;
  changeAge: (num: number) => void;
  changeValue: (key: string, value: string) => void;
};

export const useData = createStore<User>((set) => ({
  // SET = função utilizada para alterar valores do objeto ou variavel, (vem do zustand)
  user: {
    userName: "",
    password: "",
    age: 0,
  },

  changeName: (name: string) =>
    set((state) => ({
      // "SET" (SETAR/ALTERAR)
      // "STATE" valor antigo daquilo que iremos alterar
      // Sempre que retornar um objeto usar () ANTES DAS {}
      user: {
        // "...state.user," Pegando tudo que era antigo e "setando" no objeto ANTES DE PASSAR AS NOVAS "INF"
        ...state.user,
        userName: name, // Passando o novo valor de "USERNAME"
      },
    })),

  changePassword: (pass: string) => {
    set((state) => ({
      user: {
        ...state.user,
        password: pass,
      },
    }));
  },

  changeAge: (num: number) => {
    set((state) => ({
      user: {
        ...state.user,
        age: num,
      },
    }));
  },

  changeValue: (key: string, value: string) =>
    set((state) => ({
      user: {
        ...state.user,
        [key]: value,
      },
    })),
}));
