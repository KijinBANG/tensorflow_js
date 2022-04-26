// import * as tf from '@tensorflow/tfjs';
//
// const model = tf.sequential();
//
// model.add(tf.layers.dense({units: 1, inputShape: [2]}));
//
// model.compile({loss:'meanSquaredError', optimizer:'adam'});
//
// const xs = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]], [4, 2]);
// const ys = tf.tensor2d([0, 1, 1, 0], [4, 1]);
//
// model.fit(xs, ys).then(() => {
//     model.predict(tf.tensor2d([[0, 1]], [1, 2])).print();
// });

//web server 만들기
import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});