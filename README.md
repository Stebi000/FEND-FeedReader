# Udacity Feedreader Testing Udacity

This project is part of the Frontend Web Developer Nanodegree (full Google scholarship).


# Project Overview

For this project udacity provided a web-based application that reads RSS feeds. This project's purpose is to build testing suites with Jasmine to check one by one the main functionalities of the feed reader.

## Tests Included

The tests included are the following (All the functions tests are located in: ``` jasmine/spec/feedreader.js ```):

### RSS Feeds

1. Ensure that the RSS feeds are defined.
2. Ensure that each feed has a defined, non-empty URL.
3. Ensure that each feed has a defined, non-empty name.

### Menu

1. Ensure the menu is hidden by default.
2. Ensure that clicking on the menu icon shows the menu.
3. Ensure that clicking on the menu icon again hides the menu.

### Initial Entries

1. Ensure that each feed contains at least one feed entry.

### New Feed Selection

1. Ensure that switching to a new feed actually changes the content.
