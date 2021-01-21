import React, { useContext, useRef } from "react";
// import { connect } from "react-redux";
// import { Todo, fetchTodos, deleteTodo } from "../actions";
// import { StoreState } from "../reducers";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Add, Delete } from "@material-ui/icons";
import {
  Container,
  Checkbox,
  Box,
  Grid,
  TextField,
  createMuiTheme,
} from "@material-ui/core";
import { orange, blue } from "@material-ui/core/colors";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { JsxFragment } from "typescript";
import { useState } from "react";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #333, #999)",
//     // border: 0,
//     // borderRadious: 15,
//     // color: "white",
//     // padding: "0 30px",
//   },
// });

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: blue[300],
//     },
//     secondary: {
//       main: orange[500],
//     },
//   },
// });

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>;
// }

enum CalcOp {
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
}

interface CalcItem {
  id: number;
  value: number;
  op: CalcOp;
}

interface AppProps {
  items: CalcItem[];
}

interface AppState {
  items: CalcItem[];
}

interface CalcItemUIProps {
  item: CalcItem;
  // onDeleteClick: onDeleteClick;
}

const AppContext = React.createContext<AppState>({
  items: [],
});

// class App extends React.Component<AppProps, AppState> {

function onAddClick(item: CalcItem) {}

//https://stackoverflow.com/a/52125944
function InputUI(): JSX.Element {
  const [inputNum, setInputNum] = useState("");

  function handleSubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault();

    console.log(inputNum);
    setInputNum("");
  }

  function onInputChange(event: React.FormEvent<HTMLDivElement>) {
    let value = (event.target as any).value;
    setInputNum(value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          value={inputNum}
          variant="outlined"
          onInput={onInputChange}
          label="数字を入力"
        />
        <Button
          type="submit"
          disabled={!inputNum}
          startIcon={<Add />}
          variant="contained"
          color="primary"
        >
          追加
        </Button>
      </form>
    </>
  );
}

function ItemListUI(): JSX.Element {
  const { items } = useContext(AppContext);

  return (
    <>
      {items.map((item) => (
        <ItemUI key={item.id} item={item} />
      ))}
    </>
  );
}

const ItemUI: React.FC<CalcItemUIProps> = ({ item }) => {
  return (
    <div key={item.id}>
      <Checkbox></Checkbox>
      <TextField
        type="number"
        InputProps={{
          inputProps: {},
        }}
        label="数字を入力してください"
      />

      <Button
        // onClick={() => onDeleteClick(item.id)}
        startIcon={<Delete />}
        size="small"
        variant="contained"
        color="secondary"
      >
        削除
      </Button>
    </div>
  );
};

export default function MainUI(): JSX.Element {
  return (
    <>
      <Grid container justify="center" direction="column" alignContent="center">
        <InputUI />
      </Grid>
    </>
  );
}

// componentDidMount() {
//   this.props.fetchTodos();
// }
// constructor(props: AppProps) {
//   super(props);
//   this.state = {
//     userInput: NaN,
//     items: [],
//   };
// }
// componentDidUpdate(prevProps: AppProps): void {
//   if (!prevProps.todos.length && this.props.todos.length) {
//     this.setState({ fetching: false });
//   }
// }
// onButtonClick = (): void => {
//   this.props.fetchTodos();
//   this.setState({ fetching: true });
// };
// onDeleteClick = (id: number): void => {
//   this.props.deleteTodo(id);
// };
// render() {
//   console.log(this.props.todos);
//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="md">
//         <Grid
//           container
//           justify="center"
//           direction="column"
//           alignContent="center"
//         >
//           <Box display="flex">
//             <TextField variant="outlined" label="数字を入力" />
//             <Button
//               startIcon={<Add />}
//               onClick={this.onButtonClick}
//               variant="contained"
//               color="primary"
//             >
//               追加
//             </Button>
//           </Box>
//           {/* {this.state.fetching ? "LOADING" : null} */}
//           {this.renderList()}
//         </Grid>
//       </Container>
//     </ThemeProvider>
//   );
// }
// renderList(): JSX.Element[] {
//   return this.props.todos.map((todo: Todo) => {
//     return (
//       <div key={todo.id}>
//         <Checkbox></Checkbox>
//         {/* <ButtonGroup size="small" variant="contained" color="primary"> */}
//         <TextField
//           type="number"
//           InputProps={{
//             inputProps: {},
//           }}
//           label="数字を入力してください"
//         />
//         <Button
//           onClick={() => this.onDeleteClick(todo.id)}
//           startIcon={<Delete />}
//           size="small"
//           variant="contained"
//           color="secondary"
//         >
//           削除
//         </Button>
//         {/* <TextField
//           color="secondary"
//           type="number"
//           label="Time"
//           variant="filled"
//           value={todo.title}
//         /> */}
//         {/* </ButtonGroup> */}
//         {/* <button onClick={() => this.onDeleteClick(todo.id)}>削除</button> */}
//         {/* <span>{todo.title}</span> */}
//       </div>
//     );
//   });
// }
// }

// const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
//   return { todos };
// };

// export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
