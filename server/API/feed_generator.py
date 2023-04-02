import random
import threading
import time


class FeedGenerator:
    def __init__(self, feed_chunk_length=3):
        self.current_feed_index = 0
        self.feed_chunk_length = feed_chunk_length
        self.feed = []
        self._running_threads = []
        self._generate_feed_parallel()
        
    def re_init(self):
        """
        Function to re-initialize the feed generator object
        :return:
        """
        self.current_feed_index = 0
        self.feed = []
        self._running_threads = []
        self._generate_feed_parallel()
        
    def get_all_feed(self):
        """
        Function returns all available feed from the feed list
        :return:
        """
        return self.feed
    
    def get_next_feed_chunk(self):
        """
        Function returns the next feed from the feed list
        :return:
        """
        if self.current_feed_index < len(self.feed):
            feed_chunk = self.feed[self.current_feed_index:self.current_feed_index + self.feed_chunk_length]
            self.current_feed_index += self.feed_chunk_length
            return feed_chunk
        else:
            return None
        
    def _generate_feed_parallel(self):
        """
        Function to run a thread to generate feed in the background and keep storing in the feed list
        :return:
        """
        instance_id = random.randint(1, 100000)
        threading.Thread(target=self.__generate_feed, args=(instance_id,)).start()
        self._running_threads.append(instance_id)
        
    def __generate_feed(self, instance_id: int):
        """
        Function to generate feed and store it in the feed list
        :return:
        """
        while True:
            # get the latest news
            news = f"News {len(self.feed) + 1}"
            # add to feed
            self.feed.append({
                "title": news,
                "description": f"{news} Description",
            })
            # sleep for 5 minutes
            time.sleep(10)
            if instance_id not in self._running_threads:
                break
        print(f"[x] Thread Stopped for instance_id: {instance_id} at time: {time.time()}")
