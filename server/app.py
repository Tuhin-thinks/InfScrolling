from flask import Flask, jsonify, render_template, redirect, url_for

from API.feed import feed_api

app = Flask(__name__)
app.secret_key = 'super secret key'

app.register_blueprint(feed_api)


@app.route('/')
def index():
    return "<h1>Welcome to the home page.</h1>"


@app.route('/home')
def home():
    return render_template('home.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000)
