// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

// Claim and case are used interchangebly for this prototype
// Contract logic governing a claim

contract ReportCase {
    enum Statuses {Submitted, Received, Active, Unsuccessful, Successful}
    // Statuses constant defaultChoice = Statuses.Submitted;
    uint256 public caseCount = 0;
    address payable add = 0xD86518b29BB52a5DAC5991eACf09481CE4B0710d;
    uint256 dateOfLodge = block.timestamp;

    // Structure of a case/claim
    struct Case {
        uint256 caseId;
        string title;
        uint256 dateOfLodge;
        string institution;
        string implicated;
        string statement;
        string evidence;
        Statuses status;
        address payable rewardAddress;
    }
    mapping(uint256 => Case) public cases;

    // Function to add a claim to the blockchain
    function createCase(
        string memory _title,
        string memory _institution,
        string memory _implicated,
        string memory _statement,
        string memory evidence
    ) public {
        caseCount++;
        cases[caseCount] = Case(
            caseCount,
            _title,
            dateOfLodge,
            _institution,
            _implicated,
            _statement,
            evidence,
            Statuses.Submitted,
            add
        );
    }

    // Update the status of a claim from Submitted to Received to Active
    // No logic available for this step yet
    // All cases will complete as successful for this prototype
    function updateCase(uint256 _caseId) public {
        if (cases[_caseId].status == Statuses.Submitted) {
            cases[_caseId].status = Statuses.Received;
        } else if (cases[_caseId].status == Statuses.Received) {
            cases[_caseId].status = Statuses.Active;
        } else if (cases[_caseId].status == Statuses.Active) {
            cases[_caseId].status = Statuses.Successful;
        }
    }

    constructor() public {
        createCase(
            "DRUG THEFT",
            "MOH",
            "PERSON X",
            "I witnessed 3 individuals led by person x conducting drug theft. The suspects used an ambulance belonging to the hospital under Reg number UG 3701, and transported a box containing 2000 pieces of dexamethasone inject-able drugs under batch number l 0313, which was recovered and exhibited.",
            "NONE"
        );
    }
}
