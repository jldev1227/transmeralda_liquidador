import { AlertState, Usuario } from "../types/index";

// Definimos los tipos de acciones que puede manejar el reducer
export type UsuarioActions =
  | { type: 'SET_USUARIO'; payload: Usuario}
  | { type: 'SET_ERROR'; payload: AlertState }
  | { type: 'CLEAR_USUARIO' }
  | { type: 'CLEAR_ERROR' }
  | { type: 'UPDATE_USUARIO'; payload: Usuario }
  | { type: 'AUTENTICAR_USUARIO'; payload: { usuario: Usuario } };

// Definimos el estado inicial del usuario
export type UsuarioState = {
  usuario: Usuario | null,
  alerta: AlertState | null,
  isAuthenticated: boolean
};

export const initialState: UsuarioState = {
  usuario: null,
  alerta: null,
  isAuthenticated: false
};

// Reducer del usuario
export function UsuarioReducer(
  state: UsuarioState = initialState,
  action: UsuarioActions
): UsuarioState {
  if (action.type === 'SET_USUARIO') {
    return {
      ...state,
      usuario: action.payload,
      isAuthenticated: true
    }
  } else if (action.type === "SET_ERROR") {
    return {
      ...state,
      alerta: action.payload
    }
  } else if (action.type === 'CLEAR_USUARIO') {
    return {
      ...state,
      usuario: null,
      isAuthenticated: false
    };
  } else if (action.type === 'CLEAR_ERROR') {
    return {
      ...state,
      alerta: null,
    };
  } else if (action.type === 'UPDATE_USUARIO') {
    if (!state.usuario) {
      throw new Error("No existe usuario para actualizar");
    }
    return {
      ...state,
      usuario: {
        ...state.usuario,
        ...action.payload,
      },
    };
  } else {
    return state;
  }
}