Feature: Batching
  As a producer of depositions
  I want to submit depositions to be batched, stored, and published
  So that I can record their existence

  Scenario: Produce a single deposition
    Given a running ethereum node
    And a running IPFS server
    And a running database
    And a record of the deposition
    And a running RabbitMQ server
    And a running batcher
    When I submit the deposition to the batcher
    Then the record of the deposition will be updated
    And the batch will have been recorded in IPFS
    And the batch will have been published to Ethereum
