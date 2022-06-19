import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {},
    title: {
        fontSize: "18px",
        color: "#111111",
        padding: "16px",
    },
}));

export const NextPage = () => {
    const styles = useStyles();
    const history = useHistory();

    const onClickBack = () => {
        history.goBack();
    };

    return (
        <>
            <Typography className={styles.title}>次のページ</Typography>
            <Button variant="contained" onClick={onClickBack}>
                戻る
            </Button>
        </>
    );
};
