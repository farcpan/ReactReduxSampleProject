import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import * as Three from "three";

import { RootReducerType } from "../Reducers";
import { increment, decrement } from "../Actions";

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

    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const w = 960;
        const h = 540;
        const renderer = new Three.WebGLRenderer();
        const element = mountRef.current;
        element?.appendChild(renderer.domElement);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(w, h);
        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(45, w / h, 1, 10000);
        camera.position.set(0, 0, +1000);
        const geometry = new Three.SphereGeometry(300, 30, 30);
        //const loader = new Three.TextureLoader();
        const material = new Three.MeshStandardMaterial();
        const mesh = new Three.Mesh(geometry, material);
        scene.add(mesh);

        const directionalLight = new Three.DirectionalLight(0xffffff);
        directionalLight.position.set(1, 1, 1);

        scene.add(directionalLight);

        const tick = () => {
            mesh.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        };

        tick();
        return () => {
            element?.removeChild(renderer.domElement);
        };
    }, []);

    const onClickNext = () => {
        history.push("/next");
    };

    const count = useSelector((state: RootReducerType) => {
        return state.counter.count;
    });

    const dispatch = useDispatch();

    const plus = () => {
        dispatch(increment(3));
    };
    const minus = () => {
        dispatch(decrement(5));
    };

    return (
        <>
            <div ref={mountRef} />

            <Typography className={styles.title}>Redux Sample</Typography>
            <Typography className={styles.text}>設定値: {count}</Typography>
            <Button variant="contained" onClick={onClickNext}>
                次へ
            </Button>

            <Button onClick={plus}>+</Button>
            <Button onClick={minus}>-</Button>
        </>
    );
};
