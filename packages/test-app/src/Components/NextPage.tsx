import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { Box, Button, IconButton, Card, Typography } from "@material-ui/core";
import ReactToPrint from "react-to-print";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(() => ({
    root: {},
    title: {
        fontSize: "18px",
        color: "#111111",
        padding: "16px",
    },

    footer: {
        position: "fixed",
        bottom: 0,
        height: "96px",
        width: "100%",
    },

    dispButton: {
        position: "relative",
        left: "0px",
        top: "0px",
    },

    operation: {
        height: "100%",
        width: "100%",
        position: "absolute",
        left: "0px",
        backgroundColor: "#88888833",
        animationName: "$operationAnimation",
        animationDuration: ".5s",
        pointerEvents: "none",
    },
    "@keyframes operationAnimation": {
        from: {
            transform: "translateX(-100%)",
        },
        to: {
            transform: "translateX(0)",
        },
    },
    operationHidden: {
        height: "100%",
        width: "100%",
        position: "absolute",
        transform: "translateX(-100%)",
        backgroundColor: "#88888833",
        animationName: "$operationHiddenAnimation",
        animationDuration: ".5s",
        pointerEvents: "none",
    },
    "@keyframes operationHiddenAnimation": {
        from: {
            transform: "translateX(0)",
        },
        to: {
            transform: "translateX(-100%)",
        },
    },
}));

const longText: string =
    "Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! Hello World !! ";

export const NextPage = () => {
    const styles = useStyles();
    const history = useHistory();

    const componentRef = useRef(null);

    const onClickBack = () => {
        history.goBack();
    };

    const [dispOpe, setDispOpe] = useState(true);

    const dispData: { num: number; text: string }[] = [...Array(10)].map(
        (_, i) => {
            return {
                num: i + 1,
                text: longText,
            };
        }
    );

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ padding: "16px" }}>
            <Card style={{ width: "595px" }} elevation={1}>
                <div ref={componentRef} style={{ padding: "16px" }}>
                    <Typography className={styles.title}>次のページ</Typography>
                    {dispData.map((data) => {
                        return (
                            <div style={{ padding: "16px" }}>
                                <Typography>{data.num}</Typography>
                                <img
                                    src={
                                        "https://www.anicom-sompo.co.jp/inu/wp-content/uploads/2020/12/1532-1.jpg"
                                    }
                                    alt={"shiba inu"}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "300px",
                                    }}
                                />

                                <Typography>{data.text}</Typography>
                            </div>
                        );
                    })}
                    <Button variant="contained" onClick={onClickBack}>
                        戻る
                    </Button>
                </div>
            </Card>

            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                className={styles.footer}>
                <IconButton
                    className={styles.dispButton}
                    onClick={() => {
                        setDispOpe(!dispOpe);
                    }}>
                    {dispOpe ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </IconButton>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    className={
                        dispOpe ? styles.operation : styles.operationHidden
                    }>
                    <div style={{ flexGrow: 1 }} />
                    {dispOpe && (
                        <ReactToPrint
                            trigger={() => (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginRight: "16px" }}>
                                    印刷
                                </Button>
                            )}
                            content={() => componentRef.current}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};
