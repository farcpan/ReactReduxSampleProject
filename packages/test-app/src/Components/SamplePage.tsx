import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { Button, Typography } from "@material-ui/core";
import store from "../Stores";

const useStyles = makeStyles(() => ({
    root: {},
    title: {
        fontSize: "18px",
        color: "#111111",
        padding: "16px",
    },
    text: {
        fontSize: "14px",
        color: "#444444",
        padding: "16px",
    },
}));

export const SamplePage = () => {
    const styles = useStyles();
    const history = useHistory();

    const onClickNext = () => {
        history.push("/next");
    };

    return (
        <>
            <Typography className={styles.title}>Redux Sample</Typography>
            <Typography className={styles.text}>
                設定値: {store.getState().count}
            </Typography>
            <Button variant="contained" onClick={onClickNext}>
                次へ
            </Button>
        </>
    );
};
