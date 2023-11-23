from flask import Blueprint,render_template,request,flash,redirect,url_for
from flask_login import login_required,current_user
from . models import User,Note
from . import db
views = Blueprint('views',__name__)


@views.route('/')
@login_required
def home():
    return render_template("home.html",user=current_user)


@views.route('/notes',methods=['GET','POST'])
@login_required
def notes():
    if request.method == 'POST':
        note_title = request.form.get('note_title')
        note_text = request.form.get('note_text')

        if note_title == "":
            flash('Note Title Cannot Be Empty',category='error')
        elif note_text == "":
            flash('Note Cannot Be Empty',category='error')
        else:
            note = Note(name=note_title,data=note_text,user_id=current_user.id)
            db.session.add(note)
            db.session.commit()
            flash('Account Created!',category='success')
            


    return render_template("notes.html",user=current_user)


@views.route('/games')
@login_required
def games():
    return render_template("games.html",user=current_user)

@views.route('/photos')
@login_required
def photos():
    return render_template("photos.html",user=current_user)