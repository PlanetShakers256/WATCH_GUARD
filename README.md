# WATCH GUARD
<!-- <span style="display:block;text-align:center">![Watch guard](assets\watchguard_logo.png)</span> -->
<span style="display:block;text-align:center;margin:auto"><img width="250" src="assets\watchguard_logo.png"></span>

Watch guard is a whistleblowing DApp (decentralised application) that allows whistleblowers to lodge claims against corrupt governement officials/employees/institutions/organisations/agencies. The system allows a user to track their lodged claims to view the status. A claim can be Submitted, Received, Active, Unsuccessful/Closed or Successful/Completed.
Read the [concept paper](Concept.md) for more details. 

## DEMO

<span style="display:block;text-align:center;margin:auto"><img width="850" src="assets\front-page.PNG"></span>


[Live Demo](https://planetshakers256.github.io/WATCH_GUARD/src/)

[Recorded Demo](https://youtu.be/YULmSC0Y2Q8)

Look at the [Problem/solution](https://docs.google.com/presentation/d/1vCgTEG_NUlX_sR1xGN78GTB8JrIXkjV5lfuGjxdj8AA/edit?usp=sharing) statement.

### Features

1. Reporting
Claim reporting through form submission.
Support for .pdf, .png, .jfeg file extensions as evidence.

2. Claim Tracking
Claim tracking to view the status of a lodged claim, with the use of a code.


## Tech Stack

<span style="display:block;text-align:center"><img width="600" src="assets\arch.png"></span>

[CELO Blockchain](https://github.com/celo-org/celo-blockchain) - open cryptographic protocol that allows applications to make transactions with and run smart contracts in a secure and decentralized fashion using the WEB3 and an attempt with [Contract Kit](https://github.com/celo-org/celo-monorepo/tree/master/packages/contractkit) SDK - a library to help developers and operators of Validator nodes interact with the Celo Blockchain and Celo Core Contracts. (Feel free to chip and help with this implementations - Attempt can be found in src/app2.js )

## Built On

1. [HTML](https://www.w3schools.com/html/html_intro.asp)/[CSS](https://www.w3schools.com/css/) - to design the interface.
2. [JavaScript](https://www.w3schools.com/js/DEFAULT.asp) - to interact with the smart contract.
3. [Solidity](https://docs.soliditylang.org/en/v0.7.4/) - to write smart contracts.


## Installation

1. Install [nodejs/npm](https://nodejs.org/en/)
2. Clone this repository `git clone https://github.com/PlanetShakers256/WATCH_GUARD.git`
3. Run `npm install` to install all dependencies

## Usage 
### Deply locally
1. Run `ganache-cli --port 7545` to start the network.
2. Deploy the contract by running `truffle migrate`.

>Run `truffle console` to interact with the smart contract/blockchain.

>Create an instance of the contract e.g `contract = await ReportCase.deployed()`

>Use this instance to call functions.

OR

> Run `npm run dev` to interact with the contract on a web browser.

> Add [metamask](https://metamask.io/) to your browser - to connect to and interact with the network.

> [Credit](https://celo.org/developers/faucet) your account with some test CELO.

> Perform actions e.g. create and view a claim.

## Future Considerations

1. Incorporation of a rewarding system into the network - using cryptocurrencies without the need for a whistleblower to physically present themselves or any more information about themselves to those who need to issue a reward upon a successful investigation.
2. Capability of using the [structured] information collected over a period of time to perform valuable analytics.
3. Integration with other government systems to allow for the possibility of analysis of data flowing through these systems. The results of this analysis could give insight into multiple groups of information and perform a certain set of actions, and when the system becomes smart enough, flag inconsistencies and alert those in charge.
4. Addition of a chatbot to support users of the system.
5. Multilanguage support
6. Secure mailing system to notify the user of activity, inplace of having to check every couple of days.
7. Creation of randomly generated numbers (using [Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf-api-reference)) that will be used by whistleblowers to track their lodged cases.
8. Broadcasting of lodged claims to the general public through social media platforms, so that the public can hold the regulatory bodies accountable.
9. Incorporation of A.I abilities into answering questions to do with "lodging claims in good faith".
10. Building a mobile application.

## Contributing

The project is actively under development and open to contributions. Fill free to create issues and pull requests.

## License

Licensed under [MIT](LICENSE)

## Authors and acknowledgement

1. [Daizy Obura](https://github.com/dxania)
2. [Habib Sentongo](https://github.com/HabibSentongo)
3. [Michael Male](https://github.com/malmike)
4. [Owen Byomuhangi](https://github.com/owenbob)

