from routes import *


main = Blueprint('index', __name__)


@main.route('/')
def login():
    return render_template('login.html')
