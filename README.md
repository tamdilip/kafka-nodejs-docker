# 📣 kafka-nodejs-docker
Simple Kafka sample to boot up zookeeper and kafka service with docker and nodejs scripts to create a topic, a consumer listening to the topic and a producer to publish message with specified partion to a topic.

### Boot Zookeeper and Kafka
Initial Docker compose up to create image and run container.
```sh
        $ docker-compose up -d
```
Secondary docker commands to start/stop containers.
```sh
        $ docker-compose stop
        $ docker-compose start
```
### Kafka Node scripts

 * `node create-topic.js`  - creates a kafka topic with specified number of partitions.
 * `node consumer.js` - subscribes/listens to kafka topic for published/incoming messages.
 * `node producer.js message_one 1` - publishes message to a kafka topic to the specified partition. 
 
### References
 - https://www.baeldung.com/ops/kafka-docker-setup
 - https://www.youtube.com/watch?v=R873BlNVUB4

**Happy coding :) !!**
