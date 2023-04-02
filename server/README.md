# Inf-Scrolling -> Server

This is the server code written in flask for the infinite scrolling example.

## How to run

```bash
$ export FLASK_APP=app.py
$ export FLASK_ENV=development
$ flask run
```

Or, for windows OS

```bash
$ set FLASK_APP=app.py
$ set FLASK_ENV=development
$ flask run
```

## Technical Details

The server is written in flask and it generates some dummy data infinitely. The data is generated using the `FeedGenerator` class in `feed_generator.py`.

The data is generated in the form of a list of dictionaries. The dictionary contains the following keys:

- `title`: The title of the post
- `description`: The description of the post
