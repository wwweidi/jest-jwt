const jwt = require('@sap/node-jwt');


describe('jwt', function () {
    it('should work', function () {

        let v = new jwt();

        v.loadPEM('-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsln3v65kC2114T5sd6T4J5WBZTkPa32hvKFZcu3CoYzHSOc4Xk4yQPS9840Wt/o+8tJc6sJjYalZ6T72BgGja85mq02t0ba+9JiRBX19JWe7O9zLc40LjrciBhJetNF3YSsLvpseAOATLs6ABsMQsUcPMoDC9YFNMxJ1EtHrOmsgtYpAaehLHo90KiJpCNTJndtDGHzJpQg4Ozvjm2xU0b1klJbvGkhiyjr2YugZGtfJsa/ODC6j7W0/2SyzM5tCSgsGtFx78zP19IOZ2y+xyc350EPlYLhkcaXtzHLKI4czyJJRaiswoLDMmSJs/Wdhrxex2/FzvBmH/Yep4z8QWwIDAQAB-----END PUBLIC KEY-----');
        v.checkToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJvcGVuaWQiXSwiY2xpZW50aWQiOiJjbGllbnRpZCIsImNsaWVudHNlY3JldCI6ImNsaWVudHNlY3JldCIsImlkZW50aXR5em9uZSI6ImlkZW50aXR5em9uZSIsImlkZW50aXR5em9uZWlkIjoiaWRlbnRpdHl6b25laWQiLCJjaWQiOiJjbGllbnRpZCIsInppZCI6ImlkZW50aXR5em9uZWlkIiwiaXNzIjoidXJsIiwidXNlcl9uYW1lIjoicmZpZC50ZXN0LnVzZXJAZG9tYWluLmNvbSIsImVtYWlsIjoicmZpZC50ZXN0LnVzZXJAZG9tYWluLmNvbSIsImdpdmVuX25hbWUiOiJUZXN0IiwiZmFtaWx5X25hbWUiOiJNYWNoaW5lIiwiaWF0IjoxNTUyOTAxMzQzfQ.hs9BfkZ50xDAHZYdZOTLo31bOkhW6nEjnvsc5yDwZqMe9BpaEkexVOxEyS8pCrhXnKUJHSXxPnXRggVyDygLls4QBf5soyRLRZX8xVCEyGtizBB_FKBu_FcBj-eTsbhV1hFgVpZKNtnc2fuYjT4MZJghMmKhKexqwhi1kv0gykNlW2-Dj6ZDwwu1RcCh-1d1_DI9HCayx_78ZtBOpjHx5mwNbvt2Ucc2dfooqJAt1qNdpSUOdmCVrOVsjDE3mVc-SiLZlyX4uyN5tQ1OnT1l4yHqaStLXNPAHou-I1gdYPgWR9WO6eE-7oTSeDS4P7B7Xp2Le07DZyJgS25x_AFk1w');
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
