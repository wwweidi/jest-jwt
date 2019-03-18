const jwt = require('@sap/node-jwt');


describe('jwt', function () {
    it('should work', function () {
        let v = new jwt();

        v.loadPEM('-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsln3v65kC2114T5sd6T4J5WBZTkPa32hvKFZcu3CoYzHSOc4Xk4yQPS9840Wt/o+8tJc6sJjYalZ6T72BgGja85mq02t0ba+9JiRBX19JWe7O9zLc40LjrciBhJetNF3YSsLvpseAOATLs6ABsMQsUcPMoDC9YFNMxJ1EtHrOmsgtYpAaehLHo90KiJpCNTJndtDGHzJpQg4Ozvjm2xU0b1klJbvGkhiyjr2YugZGtfJsa/ODC6j7W0/2SyzM5tCSgsGtFx78zP19IOZ2y+xyc350EPlYLhkcaXtzHLKI4czyJJRaiswoLDMmSJs/Wdhrxex2/FzvBmH/Yep4z8QWwIDAQAB-----END PUBLIC KEY-----');
        v.checkToken('');
        let errorDescription = v.getErrorDescription();
        if (errorDescription !== "") {
            // error handling
            console.log("Error in JWT: " + errorDescription);
            expect(errorDescription).toBe('');
        } else {
            // in case of success, retrieve the payload
            console.log("JWT Payload : " + v.getPayload());
        }

    });
});
