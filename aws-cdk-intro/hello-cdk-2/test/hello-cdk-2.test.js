const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const HelloCdk2 = require('../lib/hello-cdk-2-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HelloCdk2.HelloCdk2Stack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
