from flask import Blueprint, jsonify, session
from .feed_generator import FeedGenerator

# import get_latest_news as news

feed_api = Blueprint('feed_api', __name__, url_prefix='/api')
feed_generator_obj = FeedGenerator()


@feed_api.route('/')
def feed_home():
    return jsonify({"data": "Feed Home"})


@feed_api.route('/init-feed')
def init_feed():
    """
    Function to initialize the feed object for particular user's session
    :return:
    """
    feed_generator_obj.re_init()
    return jsonify({"msg": "Feed Generator Initialized"})


@feed_api.route('/get-all-feed')
def get_all_feed():
    """
    Function to get all the feed from the feed list
    :return:
    """
    feed = feed_generator_obj.get_all_feed()
    return jsonify({"feed_data": feed})


@feed_api.route('/get-next-feed-chunk')
def get_next_feed_chunk():
    """
    Function to get the next feed chunk from the feed list
    :return:
    """
    feed_chunk = feed_generator_obj.get_next_feed_chunk()
    return jsonify({"chunk_data": feed_chunk})
