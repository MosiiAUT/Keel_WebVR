import * as React from 'react';
import {Animated, asset, StyleSheet, DirectionalLight, AmbientLight, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

let t_koralle = [-116, 0, -112];
let t_fass = [-111, 0, -237];
let t_truhe = [61, 0, -290];
let t_haken_mug = [-42, 0, -399];
let t_bild_shrimp = [32, 0, -454];

class Models extends React.Component {
    render() {
        let elements;

        switch (this.props.station) {
            case 0:
                elements = [<Koralle_d/>,<Fass_d/>,<Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 1:
                elements = [<Koralle_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Fass_d/>,<Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 2:
                elements = [<Koralle_d/>, <Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 3:
                // elements = <ChairTwo isWatched={this.props.isWatched} station={this.props.station} lit={true}/>;
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 4:
                // elements = <ChairTwo isWatched={this.props.isWatched} station={this.props.station} lit={true}/>;
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,<Haken_mug_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Bild_shrimp_d/>];
                break;
            case 5:
                // elements = <ChairTwo isWatched={this.props.isWatched} station={this.props.station} lit={true}/>;
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;
        }

        return (
            <View>
                {/*<PointLight intensity={0.5} style={{color:'white', transform:[{translate:[0,50,0]}]}}/>*/}
                <DirectionalLight intensity={0.4}/>
                <AmbientLight intensity={0.3}/>
                <Terrain/>
                <Scene/>
                <Ship/>
                {/*
                <Fass/>
                <Geschirr/>
                <GPflanze/>
                <Koralle/>
                <Lilapflanze/>
                <Pflanze/>
                <Rosakoralle/>
                <Schuh/>
                <Stein/>
                <Truhe/>
                */}
                {elements}
            </View>
        );

    }
}

/*
//da die variablen global sind, greifen alle entities darauf zu, deswegen bewegt sich das
//nächste objekt wenn man sich teleportiert zurück....
let rotation = new Animated.Value(0);
let translationX = new Animated.Value(0);
let translationY = new Animated.Value(0);
let translationZ = new Animated.Value(0);


function animationElement(x, y, z, back) {
    if (!back) {
        translationX.setValue(0);
        translationY.setValue(0);
        translationZ.setValue(0);

        Animated.timing(rotation, {toValue: 360, duration: 20000}).start();
        Animated.timing(translationX, {toValue: x, duration: 5000}).start();
        Animated.timing(translationY, {toValue: y, duration: 5000}).start();
        Animated.timing(translationZ, {toValue: z, duration: 5000}).start();
    } else {
        Animated.timing(rotation, {toValue: 0, duration: 5000}).start();
        Animated.timing(translationX, {toValue: 0, duration: 5000}).start();
        Animated.timing(translationY, {toValue: 0, duration: 5000}).start();
        Animated.timing(translationZ, {toValue: 0, duration: 5000}).start();

    }
}
*/


// _w - watched things
// _d - watched things in default

class Koralle_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 1) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 1 && this.booli) {
            // animationElement(0, 0, 0, true, this.rotation, this.translationX, this.translationY, this,this.translationZ);

            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();

            this.booli = true;

        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_koralle},
                    {rotateY: this.rotation},
                ]
            },
                styles.red]} source={{obj: asset('w_coral.obj')}} lit={true}/>
        );
    }
}

class Fass_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 2) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 2 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();

            this.booli = true;

        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_fass},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_fass.obj')}} lit={true}/>
        );
    }
}

class Truhe_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 3) {
            // animationElement(12, 18, 6, false);

            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 3 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_truhe},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_truhe.obj')}} lit={true}/>
        );
    }
}

class Haken_mug_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 4) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 4 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_haken_mug},
                    {rotateY: this.rotation},
                ]
            },
                styles.grey]} source={{obj: asset('w_haken_mug.obj')}} lit={true}/>
        );
    }
}

class Bild_shrimp_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 5) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 5 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_bild_shrimp},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_bild_shrimp.obj')}} lit={true}/>
        );
    }
}

class Koralle_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.red, styles.koralle]} source={{obj: asset('w_coral.obj')}}/>
        );
    }
}


class Fass_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.fass]} source={{obj: asset('w_fass.obj')}}/>
        );
    }
}

class Truhe_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.truhe]} source={{obj: asset('w_truhe.obj')}}/>
        );
    }
}

class Haken_mug_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.grey, styles.haken_mug]} source={{obj: asset('w_haken_mug.obj')}}/>
        );
    }
}

class Bild_shrimp_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.bild_shrimp]} source={{obj: asset('w_bild_shrimp.obj')}}/>
        );
    }
}

class Ship extends React.Component {
    render() {
        return (
            <Entity lit={true} style={styles.brown} source={{obj: asset('ship.obj')}}/>
        );
    }
}

class Terrain extends React.Component {
    render() {
        return (
            <Entity lit={true} style={styles.sand} source={{obj: asset('terrain.obj')}}/>
        );
    }
}

class Scene extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene.obj')}} lit={true}/>
        );
    }
}

class Fass extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('fass.obj')}} lit={true}/>
        );
    }
}

class Geschirr extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('geschirr.obj')}} lit={true}/>
        );
    }
}

class GPflanze extends React.Component {
    render() {
        return (
            <Entity style={styles.lightgreen} source={{obj: asset('gpflanze.obj')}}
                    lit={true}/>
        );
    }
}

class Pflanze extends React.Component {
    render() {
        return (
            <Entity style={styles.green} source={{obj: asset('pflanze.obj')}} lit={true}/>
        );
    }
}

class Koralle extends React.Component {
    render() {
        return (
            <Entity style={styles.red} source={{obj: asset('koralle.obj')}} lit={true}/>
        );
    }
}

class Lilapflanze extends React.Component {
    render() {
        return (
            <Entity style={styles.purple} source={{obj: asset('lilapflanze.obj')}} lit={true}/>
        );
    }
}

class Rosakoralle extends React.Component {
    render() {
        return (
            <Entity style={styles.pink} source={{obj: asset('rosakoralle.obj')}} lit={true}/>
        );
    }
}

class Schuh extends React.Component {
    render() {
        return (
            <Entity style={styles.black} source={{obj: asset('schuh.obj')}} lit={true}/>
        );
    }
}

class Stein extends React.Component {
    render() {
        return (
            <Entity style={styles.grey} source={{obj: asset('stein.obj')}} lit={true}/>
        );
    }
}

class Truhe extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('truhe.obj')}} lit={true}/>
        );
    }
}

/*
class ChairTwo extends React.Component {
    rotation = new Animated.Value(30);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 0) {
            this.rotation.setValue(30);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 0 && this.booli) {
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: [-5, 0.5, 0.1]},
                    {rotateY: this.rotation},
                    {scale: 0.3}
                ]
            }]} source={{obj: asset('chair.obj')}}/>
        );
    }
}
*/

const styles = StyleSheet.create({
    black: {
        color: 'darkgrey',
    },
    brown: {
        color: '#A86F3E',
    },
    darkbrown: {
        color: '#663D1A',
    },
    green: {
        color: '#1E9949',
    },
    grey: {
        color: 'lightgrey',
    },
    lightgreen: {
        color: '#49C675',
    },
    pink: {
        color: '#F7A3CB',
    },
    purple: {
        color: '#CC97D8',
    },
    red: {
        color: '#C93250',
    },
    sand: {
        color: '#FCF8C7',
    },
    white: {
        color: 'white',
    },
    koralle: {
        transform: [{translate: t_koralle}],
    },
    fass: {
        transform: [{translate: t_fass}],
    },
    truhe: {
        transform: [{translate: t_truhe}],
    },
    haken_mug: {
        transform: [{translate: t_haken_mug}],
    },
    bild_shrimp: {
        transform: [{translate: t_bild_shrimp}],
    },

});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;