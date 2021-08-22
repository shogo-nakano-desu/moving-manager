import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import firebase from "firebase";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { setCurrentUser, stateType, listenProcedures } from "../utils/reducers";
import TodosComponent from "../components/Todos";
import AddTodoButtonComponent from "../components/AddTodoButton";
import ChoseProjectComponent from "../components/ChoseProject";
import { auth, db } from "../../firebaseClient";
import AppBarComponent from "../components/AppBar";
import { filteredProjectData } from "../utils/fetchProjectData";
import { TARGET_PERSON } from "../info/procedures";
import { isValid } from "date-fns";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { height: "100%", width: "100%" },
    appbar: {
      height: "9%",
      width: "100%",
    },
    todos: {
      height: "83%",
      width: "100%",
      marginLeft: "5px",
      marginRight: "5px",
    },
    addtodo: {
      height: "8%",
      width: "100%",
    },
  })
);

const Dashboard = () => {
  filteredProjectData;
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const procedures = useSelector((state: stateType) => state.procedures);
  const userId = useSelector((state: stateType) => state.user.uid);
  const projectId = useSelector((state: stateType) => state.project.projectId);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      !user && router.push("/sign-in");
    });
  }, [router]); // dependenciesが必要とのこと

  return (
    <>
      {console.log("dashboard userId", userId)}
      {projectId ? (
        <div style={{ width: "100%", height: "98%" }}>
          <Box className={classes.appbar}>
            <AppBarComponent />
          </Box>
          <Box className={classes.todos}>
            <TodosComponent userId={userId} projectId={projectId} />
          </Box>
          <Box
            className={classes.addtodo}
            display="flex"
            justifyContent="flex-end"
          >
            <AddTodoButtonComponent />
          </Box>
        </div>
      ) : (
        <ChoseProjectComponent userId={userId} />
      )}
    </>
  );
};
export default Dashboard;
