from flask import Flask, render_template, request, redirect, url_for
import psycopg2

app = Flask(__name__)
app.secret_key = "your_secret_key"


# Pripojenie k PostgreSQL databáze
conn = psycopg2.connect(
    dbname='b1mxnbtfaytwhs4af34m',
    user='uwj8p4v8zuoeyv3iqlxg',
    password='Kh3N5D3JtxcCyJeXuUeeZVNCROL6Jo',
    host="b1mxnbtfaytwhs4af34m-postgresql.services.clever-cloud.com",
    port=50013
)


users = {
    'john': 'password123',
    'jane': 'mypassword'
}


@app.route('/')
def home():
    return redirect(url_for('login'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users and users[username] == password:
            return redirect(url_for('welcome', username=username))
        else:
            error = "Invalid username or password"
            return render_template('login.html', error=error)
    return render_template('login.html')


@app.route('/welcome/<username>')
def welcome(username):
    return render_template('welcome.html', username=username)


@app.route("/search")
def index():
    # Získanie údajov o cestách z databázy
    cur = conn.cursor()
    cur.execute("SELECT * FROM rides")
    trips = cur.fetchall()
    cur.close()
    return render_template("search.html", rides=rides)

# Ďalšie routy a funkcie (registrácia, prihlásenie, vytváranie ciest, atď.)

# @app.route("/register", methods=["GET", "POST"])
# def register():
#     if request.method == "POST":
#         username = request.form["username"]
#         password = request.form["password"]
#         # Implementujte pridanie používateľa do databázy
#         # Napríklad:
#         # cur = conn.cursor()
#         # cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
#         # conn.commit()
#         # cur.close()
#         return redirect(url_for("login"))  # Presmerovanie na prihlásenie
#     return render_template("register.html")


@app.route("/create_ad", methods=["POST"])
def add_trip():
    if request.method == "POST":
        route = request.form["route"]
        time = request.form["time"]
        conditions = request.form["conditions"]
        # Pridajte údaje do databázy
        cur = conn.cursor()
        cur.execute("INSERT INTO trips (route, time, conditions) VALUES (%s, %s, %s)", (route, time, conditions))
        conn.commit()
        cur.close()
        return redirect(url_for("create_ad"))


@app.route("/")
def index():
    # Získanie údajov o cestách z databázy na základe vyhľadávania
    search_term = "your_search_term"  # Nahraďte hľadaným výrazom
    cur = conn.cursor()
    cur.execute("SELECT * FROM trips WHERE route ILIKE %s", (f"%{search_term}%",))
    trips = cur.fetchall()
    cur.close()
    return render_template("search.html", trips=trips)

if __name__ == "__main__":
    app.run(debug=True)
