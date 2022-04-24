import { useReducer } from "react";
import axios from "axios";

export default function useFormState(initialState) {
  const actions = {
    updateForm: "UPDATE_FORM",
    submit: "SUBMIT_FORM",
    Save: "Save",
    Loading: "Loading",
    Load_Team: "Load_Team",
  };

  const validate = (name, value) => {
    switch (name) {
      case "fName":
        return !!value ? "" : "Enter first name";
      case "lName":
        return !!value ? "" : "Enter last name";
      case "email":
        return !!value &&
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
          ? ""
          : "Enter valid emailid";
      case "password":
        return !!value ? "" : "Enter password";
    }
  };

  const reducer = (oldState, action) => {
    switch (action.type) {
      case actions.Loading:
        return {
          ...oldState,
          loading: action.data,
        };
      case actions.updateForm:
        const { name, value, error, touched, isValidForm } = action.data;
        return {
          ...oldState,
          [name]: { value, error, touched },
        };
      case actions.submit:
        return {
          ...oldState,
          isValidForm: true,
          submitState: action.data,
          saveState: "Saving",
        };
      case actions.Save:
        return {
          ...oldState,
          saveState: action.data ? "Saved" : "SaveFailed",
        };
      case actions.Load_Team:
        return {
          ...oldState,
          teams: action.data,
        };
    }
    return oldState;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateForm = (data) => {
    dispatch({
      type: actions.updateForm,
      data: {
        ...data,
        touched: true,
      },
    });
  };

  const loadTeams = async () => {
    debugger;
    dispatch({ type: actions.Loading, data: true });
    const resp = await axios.get("http://localhost:3333/team");
    const teams = resp.data.map((t) => {
      return { key: t._id, value: t.name };
    });
    dispatch({ type: actions.Load_Team, data: teams });
  };

  const submitForm = async (person) => {
    dispatch({ type: actions.submit, data: true });
    const info = {
      firstName: person.fName.value,
      lastName: person.lName.value,
      emailId: person.email.value,
      password: person.password.value,
      team: person.team.value,
    };
    try {
      // debugger;
      // fetch("http://localhost:3333/members", {
      //   method: "post",
      //   body: JSON.stringify(info),
      //   //mode: "cors",
      //   headers: {
      //     accept: "application/json",
      //     "content-type": "application/json",
      //   },
      // }).then((data) =>
      //   setTimeout(() => dispatch({ type: actions.Save, data: true }), 2000)
      // );

      const data = await axios.post("http://localhost:3333/member", info, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({ type: actions.Save, data: true });
    } catch {
      dispatch({ type: actions.Save, data: false });
    }
  };

  return [state, updateForm, submitForm, validate, loadTeams];
}
