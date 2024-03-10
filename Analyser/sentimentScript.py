import sys
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def sentiment_scores(sentence):

	sid_obj = SentimentIntensityAnalyzer()
	sentiment_dict = sid_obj.polarity_scores(sentence)

	if sentiment_dict['compound'] >= 0.1 :
		return "Positive"

	elif sentiment_dict['compound'] <= - 0.1 :
		return "Negative"

	else :
		return "Neutral"

input_data = sys.stdin.readline()

print(sentiment_scores(input_data))
