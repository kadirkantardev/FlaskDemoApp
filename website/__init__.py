from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from .models import db
from .models import User,Note
from .views import views
from .auth import auth

from flask_login import LoginManager


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'SECRET'

    SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
    username="kadir00861",
    password="v3g7ethxebx9hmlfl1ve",
    hostname="kadir00861.mysql.pythonanywhere-services.com",
    databasename="kadir00861$flaskappdatabase",)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))


    app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    
    
    



    

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    
    

    with app.app_context():
        db.create_all()


    return app



