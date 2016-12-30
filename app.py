from flask import Flask
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from routes.index import main as routes_index

app = Flask(__name__)
manager = Manager(app)

app.register_blueprint(routes_index)


def configure_app():
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.secret_key = 'secret key'
    app.register_blueprint(routes_index)


def configured_app():
    configure_app()
    return app


@manager.command
def server():
    app = configured_app()
    config = dict(
        debug=True,
        host='0.0.0.0',
        port=8000,
    )
    app.run(**config)


if __name__ == '__main__':
    configure_app()
    manager.run()
