
const { Kafka } = require('kafkajs');
const { KAFKA: {
    BROKERS,
    CLIENT_ID,
    CONSUMER_GROUP_ID,
    TOPIC
} } = require('./config');

run();
async function run() {
    try {
        const kafka = new Kafka({
            clientId: CLIENT_ID,
            brokers: BROKERS
        });

        const consumer = kafka.consumer({ groupId: CONSUMER_GROUP_ID });
        console.log('Connecting to Kafka . . .');
        await consumer.connect();
        console.log('Connected to Kafka !!');

        await consumer.subscribe({
            topic: TOPIC,
            fromBeginning: true
        });

        await consumer.run({
            eachMessage: async result => {
                console.log(`Message ${result.message.value} on partition ${result.partition}`);
            }
        });
    }
    catch (err) {
        console.error(`ERROR::CONSUMER:: ${err}`);
    }
}
