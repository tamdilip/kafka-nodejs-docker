const { Kafka } = require('kafkajs');
const { KAFKA: {
    BROKERS,
    CLIENT_ID,
    TOPIC
} } = require('./config');

run();
async function run() {
    try {
        const kafka = new Kafka({
            clientId: CLIENT_ID,
            brokers: BROKERS
        });

        const admin = kafka.admin();
        console.log('Connecting to Kafka . . .');
        await admin.connect();
        console.log('Connected to Kafka !!');

        await admin.createTopics({
            topics: [{
                topic: TOPIC,
                numPartitions: 2
            }]
        });

        console.log(`Topic - ${TOPIC} Created Successfully!`);
        await admin.disconnect();
    }
    catch (err) {
        console.error(`ERROR::TOPIC:: ${err}`);
    }
}
