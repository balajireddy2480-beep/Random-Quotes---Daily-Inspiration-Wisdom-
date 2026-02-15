
import { getRealQuotesByTopic } from './src/utils/RealQuoteEngine';

const topics = ["Love", "war", "SCIENCE", "motivation", "life", "unknown"];

topics.forEach(t => {
    const results = getRealQuotesByTopic(t);
    console.log(`Topic: "${t}" -> Found: ${results.length}`);
    if (results.length > 0) {
        console.log(`  First: ${results[0].quote} - ${results[0].author}`);
    }
});
