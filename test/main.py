import socketio
from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler
from random import randint


# create a Socket.IO server
sio = socketio.Server(async_mode='gevent')


@sio.on('predict')
def predict(sid, data):
    print("predicting", data)
    pred = [114248, 104218, 8959, 1718, 94308, 8869, 100089, 89718, 99919, 8627]
    p = {}
    for i in pred:
        p[i] = randint(0, 100)

    print("done_predicting", p)

    sio.emit("done_predicting", p, room=sid)


@sio.on('connect')
def connect(sid, environ):
    print('connect ', sid)


@sio.on('disconnect')
def disconnect(sid):
    print('disconnect ', sid)


app = socketio.Middleware(sio)

pywsgi.WSGIServer(('', 3001), app, handler_class=WebSocketHandler).serve_forever()
