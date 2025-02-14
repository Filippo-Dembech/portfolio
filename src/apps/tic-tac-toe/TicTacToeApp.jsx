import { Provider,  } from "react-redux";
import store from './store';
import GamePage from './components/GamePage/GamePage';
import { useEffect } from "react";

export default function TicTacToeApp({setDocumentTitle}) {
    
    console.log("hi there");

    useEffect(() => {
        setDocumentTitle((curr) => `${curr} | Tic Tac Toe`);
        return () => {
            setDocumentTitle("FD Portfolio")
        }
    }, [setDocumentTitle]);

    return (
        <Provider store={store}>
            <GamePage />
        </Provider>
    );

}
