const ReportCase = artifacts.require('./ReportCase.sol')

contract('ReportCase', (accounts) => {
    before(async () => {
        this.case = await ReportCase.deployed()
    })

    it('deploys successfully', async () => {
        const address = await this.case.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('lists cases', async () => {
        const caseCount = await this.case.caseCount()
        const acase = await this.case.cases(caseCount)
        assert.equal(acase.caseId.toNumber(), caseCount.toNumber())
        assert.equal(acase.title, 'DRUG THEFT')
        assert.equal(acase.institution, "MOH")
        assert.equal(acase.implicated, "PERSON X")
        assert.equal(acase.statement, "I witnessed 3 individuals led by person x conducting drug theft. The suspects used an ambulance belonging to the hospital under Reg number UG 3701, and transported a box containing 2000 pieces of dexamethasone inject-able drugs under batch number l 0313, which was recovered and exhibited.")
        assert.equal(acase.evidence, "NONE")
        assert.equal(caseCount.toNumber(), 1)
    })

    it('creates cases', async () => {
        const result = await this.case.createCase(
            "MISUSE OF DRUGS",
            "MOF",
            "PERSON JOHN",
            "The suspects used an ambulance belonging to the hospital under Reg number UG 3701, and transported a box containing 2000 pieces of dexamethasone inject-able drugs under batch number l 0313, which was recovered and exhibited.",
            "NONE"
        )
        const caseCount = await this.case.caseCount()
        assert.equal(caseCount, 2)
        const event = result.logs[0].args
        assert.equal(event.caseId.toNumber(), 2)
        assert.equal(event.title, "MISUSE OF DRUGS")
        assert.equal(event.institution, "MOF")
        assert.equal(event.implicated, "PERSON JOHN")
        assert.equal(event.statement, "The suspects used an ambulance belonging to the hospital under Reg number UG 3701, and transported a box containing 2000 pieces of dexamethasone inject-able drugs under batch number l 0313, which was recovered and exhibited.")
        assert.equal(event.evidence, "NONE")


    })




})