/*
--- Day 2: Inventory Management System ---
You stop falling through time, catch your breath, and check the screen on the device. "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

"Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs?

--- Part Two ---
Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

*/
function countInstances(str) {
    let count = {};
    for (const letter in str) {
        if (!(str[letter] in count)) {
            count[str[letter]] = 1;
        }
        else {
            count[str[letter]]++;
        }
    }
    return count;
}

function testDouble(str) {
    let count = countInstances(str);
    return Object.values(count).includes(2);
}

function testTriple(str) {
    let count = countInstances(str);
    return Object.values(count).includes(3);
}

function countDoublesAndTriples(input) {
    let numberOfDoubles = 0;
    let numberOfTriples = 0;
    input.forEach(phrase => {
        if (testDouble(phrase)) {
            numberOfDoubles++;
        }
        if (testTriple(phrase)) {
            numberOfTriples++;
        }
    });
    return numberOfDoubles * numberOfTriples;
}

function countDifferences(input, maxDifferences=2) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            let wordI = input[i];
            let wordJ = input[j];
            let differences = 0;
            for (const letterLocation in wordI) {
                if (wordI[letterLocation] !== wordJ[letterLocation]) {
                    differences++;
                    if (differences === maxDifferences) {
                        break;
                    }
                }
                if (parseInt(letterLocation) === wordI.length -1)
                {
                    console.log(wordI, wordJ)
                    return [wordI, wordJ];
                }
            }
        }

    }
}

function commonCharacters(input) {
    let commonWord = ''
    let [word1, word2] = countDifferences(input);
    for (const letterLocation in word1) {
        if (word1[letterLocation] === word2[letterLocation]) {
            commonWord+= word1[letterLocation];
    }
}
return commonWord;
}

const input = ["uqyoeiznvmzrstpkgnsacjxwld", "uqloeizfvmbrstpkgndacjxwyd", "dqgoeizfbmbrstpkgnhacjxwld", "uqyjeizfvmbrstpygntacjxwld", "uqyoeizfhmbrstppbnhacjxwld", "uqyoeizfvmbrstpkschanjxwld", "uqyoeizfvtbrstpkgnmazjxwld", "uqyoeizfvmyrstpzgnhacjxsld", "udtoeizfvmbrttpkgnhacjxwld", "uqyneizfvmbratpognhacjxwld", "uqyoeizfvmbrstpkunhaajxnld", "uqyteizfvmbrstpkgnhzcnxwld", "hqyteuzfvmbrstpkgnhacjxwld", "uqyoeizyvmbrsdpkgnhacdxwld", "uqyoeizfibbrsepkgnhacjxwld", "uqxoeizfvmbrstpkgnhaxjjwld", "iqaoeizfvmbrstpkrnhacjxwld", "uqyoeizpvvbrstpkghhacjxwld", "aqyoeizfvmbrstpbgnhfcjxwld", "uqyonfzfvmbrstpkgnhacjgwld", "uqyoeizovmhrstpkgnhacjxwvd", "uqyoegzfvmbrstpkgnfacjxrld", "uqyoeizfvmbrstpjgnwacjxwdd", "uqyogiifumbrstpkgnhacjxwld", "uqyorizfvmbrstpkgnhaezxwld", "uqyoexdfvmbretpkgnhacjxwld", "uqyoeizfvmbrstpkgwhlcjxzld", "uqyoeibfvmbrstpggnhzcjxwld", "udyoeizfvmbrstppwnhacjxwld", "ufyoeizfvmhrstpkgnfacjxwld", "aqyoeftfvmbrstpkgnhacjxwld", "uhyoeivfvmbrstpkgnhadjxwld", "uqyoeizfvmbrstpkgmhacjxhud", "uqyfeizfvmbrstpkgnhkljxwld", "uqyoeibfvmbrstpkgbhazjxwld", "uqyceizfvnbrslpkgnhacjxwld", "uqyoeizfvmirstpkonhacaxwld", "fqyooizfvmbrstpkgnhacjxwlq", "uqydeizfvmbgstpugnhacjxwld", "uqyoiizfvmbrstpkgnhacjalld", "uqyivizfvmbrstpkgnhocjxwld", "uqyoeizfvmbrstpngnhjcjxwtd", "uqyoeizfvmbrstpkynhrcexwld", "ugmfeizfvmbrstpkgnhacjxwld", "uqyoeizrvmbrstpkwnhycjxwld", "uqyoeiyfvmbrstpkgnlacjxwwd", "unyoeizfvmbrstrkgnhadjxwld", "uqyoeizhvmbrstpkgnhacjawlz", "uqyoeazfvmbrstpwgnhacjxwlp", "uqyoeiznvmbastpkgnhaccxwld", "kqyoeisfvmbrstikgnhacjxwld", "uqyoeizfvlxrstpmgnhacjxwld", "uqyoeiofvmbrstpkgniacjxwll", "uqyoeizfvmbrswpegnhacixwld", "uqyoeizfvmarstlkgnhanjxwld", "uuyoeizfvmbrstykgnhacjxwbd", "uqyoeizfvmbpstxkgnhacjxwlu", "uqyoqizfvmbrsspkgnhacjpwld", "uqyoeizfvmzrstnkgnhacjgwld", "uqyoeizfvmbrstrcgnhacjxwud", "uqyoeizfvmbrstpkgnuacxxwsd", "cqyoeizfvmbrscpkgnhacjxwpd", "sqyoeizfaobrstpkgnhacjxwld", "uqyoeizfvmbrgtpkgnhacjxbwd", "uqyoeibhvmbrstpkgnhagjxwld", "uqyoeizfvcbrstpkgzhactxwld", "uqkoeizfvmbrstijgnhacjxwld", "uqroelzfvmbrstpkgmhacjxwld", "uqyoeizfvmbrsfpcgnhkcjxwld", "uqyoeizfumgrstpygnhacjxwld", "uqyozibfvmbrstpkgnhacjwwld", "uqyoeigfvmbrstpkgjharjxwld", "uqpoeizfvmbrstpkgnhacjxrcd", "uqyoeizfvmbrskokgnhqcjxwld", "uqyoeikfvmbrstpkgehacjxwle", "uqygeizfvhbrstpkgnqacjxwld", "lqyoeizfvmbrsvpkgnhacjuwld", "uqyjeizfvmbectpkgnhacjxwld", "unyoeizfvmbrstpkgnhzckxwld", "uqyoeizfvmbrstpkgmoacjxwlm", "uqfoeizfvmbrutpkgnhacjrwld", "uqyohizflnbrstpkgnhacjxwld", "uquoeizfembrstpkgniacjxwld", "uqyoeizfvmbrytpkgnhbcjkwld", "pqyoeizfvsbwstpkgnhacjxwld", "uqyoerzfvmbrstpkxntacjxwld", "uqyoeizfvmbritpkgnhacjqhld", "uqyoeisfvmbrstpkglhscjxwld", "hqyoeizfvmwrstpwgnhacjxwld", "uqyoeyzrvmbrstpkgnhacjxdld", "pqyoeozfombrstpkgnhacjxwld", "uwyosizfvmbrstpkgnhacjrwld", "uqyoegzfvmbrstekbnhacjxwld", "uqyoeinfvmirstpkgdhacjxwld", "uqyoeizfvmbistpkgnobcjtwld", "uqyoeikfvmbrsepkgnhycjxwld", "qqyoeiafvmbrstpkgnhacjxold", "uqbooizfvmbrstpkgnhacjxwdd", "uquoeizfvmbrswpkgnhatjxwld", "tqyoejzfvmbrstpkgnhacjxwlv", "yqyoeizfvmbrsttkgnhakjxwld", "usyoeizfvmbfstpkgnhkcjxwld", "gqyocizfvmbrstpkgnhacjbwld", "mqyoeizfvmbrstpkgnhacjzzld", "uqyoeczfvmbrotpkgnhacjxwsd", "jqyoeizfvmkrstpkgnhacaxwld", "uqyoeirfvmblstpkgnhaijxwld", "uqpoeirfvmbrstpkgbhacjxwld", "uqyoiizcvmbrsipkgnhacjxwld", "uqyoeizfvmbrstekgnhayjywld", "uqyoeizpvmnrstpkgnhacjxwcd", "eqyoaizfvmbrstpkgnhacjzwld", "uqyubizfvmbrltpkgnhacjxwld", "kqmoeizfvmbrstbkgnhacjxwld", "uqyoeizfvmkrstpvgnhahjxwld", "uqyoeizfrmbrsjpkgchacjxwld", "uqyoeizfvmbrstfkgnhacbxwlx", "uqyoeizfvmbrstpkbngayjxwld", "uqyorizfvmbrstpkgghacjxwle", "oqyoeizfvpkrstpkgnhacjxwld", "uqyoexzfvmbrscpkgnhacjxwlq", "uqkoyilfvmbrstpkgnhacjxwld", "uqyotizfamnrstpkgnhacjxwld", "uqnoeizfvmbrstpkgnhacdfwld", "uqyoeizffmbrstqkgnhacuxwld", "uqyoeizfvmbrzhpkgnhqcjxwld", "uqyzeizfvmbrsnpkgnracjxwld", "jhyoeizfvhbrstpkgnhacjxwld", "uqyohizfvmbrstpkgnqhcjxwld", "uqyleizfgmbrstlkgnhacjxwld", "ucyoeizzvmbrstgkgnhacjxwld", "uqyoeizqvmbrstbkgahacjxwld", "uqyseizpvkbrstpkgnhacjxwld", "uqyobizfvmirstpkgnhachxwld", "uqyoiizfvmbrstpkgnhacwxzld", "uqyoeizfvmbrstpkgnhafoxsld", "pqyoeizfvmbrstpkgnhaijxwle", "uqyoeizfvubrstpkgneacjxcld", "uqyoeigfumbrstpknnhacjxwld", "uqyoeiffvmbrstwkgnhacjxxld", "uqooeizfvmbrstpkgnhacjxilv", "uqyoeizfvmbrstpkgnhaljirld", "uqyoeizfvmbistpkgnoacjtwld", "uqyogizfvmlustpkgnhacjxwld", "uqyoeizfvmufjtpkgnhacjxwld", "uqyoeixfvmbrstpugwhacjxwld", "uqyoeizfrzbrsjpkgnhacjxwld", "uqyoeizfvmbbsqpkgzhacjxwld", "uqyoeizovqfrstpkgnhacjxwld", "uqyieizfvmbrsjpkgnhacjxwzd", "uqdoeizfvmbrstnkgnqacjxwld", "usyoohzfvmbrstpkgnhacjxwld", "uqyoeicfvmbrstpkgnhacgxwtd", "uqyoeizfvmbrstpkgkhbcjxold", "fwyoeizfvmbrstpkgnhkcjxwld", "oqyoeizfvmbrstpkenhacjjwld", "uqyoeizfvmbrttpkgjhacjhwld", "uqyoeituvmbrstpkgohacjxwld", "uqyoeizfvekrslpkgnhacjxwld", "upyoeizfvmbrstpkgnhjcjxwlb", "uqyoeiwfvmbrstpkgshacjmwld", "uqyceizfvmbrstpkgnpazjxwld", "aqyoeizfvmbrstpkgntacjxwed", "uqyosizfvmbrsapkgphacjxwld", "uqyoeizfvmbysipkgnhacjxwls", "uqyoeicfvmbgstpkgnhacjxwjd", "uqyoxizfvmbrsggkgnhacjxwld", "uqyoeizfvbbrhtplgnhacjxwld", "usyoeizfvmbrstvkgnhacjxwlo", "uqyleizfvmbrstpkgnhacjxwac", "uqyoeisfvmbrstpfgnhacjxwdd", "uqyoeizwvmbvstpkgnhacjxhld", "uqyoeczfvmbrstpkgnhecjxwlv", "uqyoeizfvmbrstpkgnhacjueid", "uqyoeisfvmbrstpkgnhaxjxwzd", "uqyoeizfvmbrstpkgnhicjmyld", "ugygeizfvmbrmtpkgnhacjxwld", "uoyoeiftvmbrstpkgnhacjxwld", "uqyoeinfvmbrstpkenhacjxwbd", "xqyoeiofvmbrstpkgnhacjxwlt", "uqyoeizfvnbrsipkgnhfcjxwld", "uqyteizfvmbrstpngmhacjxwld", "uqyoeijfvmbrstpdgnhacjcwld", "uqyoeizfjmbrstpkgntaclxwld", "uqyaeizfvmbrstpkgnhajjxwkd", "uqyoeizfvmbraqpkgnhacjxwlv", "uqyocizfvmbrstpkqnhrcjxwld", "uqyoqizfvmbrdtpkenhacjxwld", "uqyoeicfvwbrstpkknhacjxwld", "uqyoeizfvmbrstpktnhacjxxlz", "uqyoeizfvmbhstpkgnhacjmwgd", "uqyoeizfvmorskpkgnhncjxwld", "nqyxeezfvmbrstpkgnhacjxwld", "uqyoeitfvmbrstpksnhicjxwld", "uqyoeizfmmwrstpkgnhacjxwud", "uqyoeizfvmmrstpkgnhvcjxwlk", "uqyoeizfvmbrstpkgihacjxblz", "uqnoeizfvmwrstpkgnhaujxwld", "uqyoeizfvlbrsrpkgnhacjxwpd", "uqyoeizfvmbwstpkgnhvcjxwdd", "uqyoeixfvlbrstpkgxhacjxwld", "uqyoeizfvmbjstpmgnhacjxmld", "uqyoeizyvhbrstpkgnhacjxwzd", "uqyhepzfvmbrstpkghhacjxwld", "uqyoetzfvmbrstpkghsacjxwld", "uqyoeizfvmbrbnpkgnuacjxwld", "uqyokizfvmbrstpkgnhacqiwld", "uqyoeizfvmbrstpkgqhacagwld", "uqyoeizfvnbvstckgnhacjxwld", "uqyoeizfbmbhstpkjnhacjxwld", "uqyoeixfvmbrstpkgnegcjxwld", "uqyoeizfvmbrstpkshlacjxwld", "uqyoeisfhmbrsnpkgnhacjxwld", "uqyoekzfvmbrstpkgnhadjxsld", "uqyoeizfzmyrstckgnhacjxwld", "uqyoeizpvmbrztpkenhacjxwld", "uqyopizffmbrstpkgnhacjxuld", "uqyoeizfvzhrstpkgnhscjxwld", "uqyoeizfvlbrstskvnhacjxwld", "uqyohizfvmbrstekgnhacaxwld", "uqlodizfvmbastpkgnhacjxwld", "uqyoeizfvubrstpbgnhacjvwld", "uqnoupzfvmbrstpkgnhacjxwld", "tqzoeizfvmbrsdpkgnhacjxwld", "pqyobizfvmbrstphgnhacjxwld", "uqyweizfvkbrstpkguhacjxwld", "uqyoexzfvmbrstzktnhacjxwld", "cqyoeizfvmbrstpkgnhacvxfld", "uqyoeiefvmbrytpmgnhacjxwld", "uqyoeizfvmbhstpkgnhmcjpwld", "uqyoeizfvnbrstpkgnhaczrwld", "uqyoeibfvnbrstpkgnhacjxvld", "uqyoeizfvebrsypygnhacjxwld", "uqyoeikfnmbrstukgnhacjxwld", "uqyoeizfvmbrsfpkgnhfcdxwld", "uqyoeizfvmmrstpnbnhacjxwld", "uqyoeizfvmbrztpegnhacjxwrd", "pqyoeizfvmbrqtukgnhacjxwld", "uqyoeizfvmbbstpkgahacjxpld", "uqsoeizfvmbpstpkgnhatjxwld", "uqyodizfvmbrsfpkgnhgcjxwld", "uuyoeizfvmbnstpkgnhacjxbld", "gqyoeizfvmbrstpkgnhacjqwcd", "uqyoeizfvmyrotkkgnhacjxwld", "uqyoeizfvmabstpkgnhacjawld", "uqyoeizfvmbrstpkglhaszxwld", "ukyoeizfvmbrstpkgnhacjxtfd", "uqeoeizfvmbrstpkgnhtnjxwld", "uqyouizfvmnrstpkgxhacjxwld", "ugyoeizfvmbrsupygnhacjxwld"]

// input = [
//     "abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"
// ]
console.log(countDoublesAndTriples(input));

console.log(commonCharacters(input));
module.exports = { testDouble, testTriple, commonCharacters };

