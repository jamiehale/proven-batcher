import * as amqp from 'amqplib';

const sendMessage = channel => {
  return channel.assertQueue('proven_batcher', { durable: false })
    .then(() => channel.sendToQueue('proven_batcher', new Buffer('abcdefg1234567')))
    .then(() => {
      console.log('Sent');
    })
    .then(() => new Promise(resolve => setTimeout(resolve, 5000)));
};

amqp.connect('amqp://localhost:5672')
  .then(connection => connection.createChannel())
  .then(channel => sendMessage(channel))
  .then(() => {
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
  });
