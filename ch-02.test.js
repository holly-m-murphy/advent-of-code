describe("should multiple the number of words containing two of the same letters by the number of words containing three of the same letters", async () =>{
    const inputVals = [
"oiwcdpbseqgxryfmlpktnupvza",
"oiwddpbsuqhxryfmlgkznujvza",
"ziwcdpbsechxrvfmlgktnujvza",
"oiwcgpbseqhxryfmmgktnhjvza",
"owwcdpbseqhxryfmlgktnqjvze",
"oiscdkbseqhxrffmlgktnujvza",
"oiwcdibseqoxrnfmlgktnujvza",
"oiwcdpbsejhxryfmlektnujiza",
"oewcdpbsephxryfmlgkwnujvza",
"riwcdpbseqhxryfmlgktnujzaa",
"omwcdpbseqwxryfmlgktnujvqa",
"oiwcdqqneqhxryfmlgktnujvza",
"oawcdvaseqhxryfmlgktnujvza",
"oiwcdabseqhxcyfmlkktnujvza",
"oiwcdpbseqhxryfmlrktrufvza",
"oiwcdpbseqhxdyfmlgqtnujkza",
"oiwcdpbseqhxrmfolgktnujvzy",
"oiwcdpeseqhxnyfmlgktnejvza",
"oiwcdpbseqhxrynmlaktlujvza",
"oiwcdpbseqixryfmlektncjvza",
"liwtdpbseqhxryfylgktnujvza",
"ouwcdpbszqhxryfmlgktnajvza",
"oiwzdpbseqhxryfmngktnujvga",
"wiwcfpbseqhxryfmlgktnuhvza",
"oiwcdpbselhfryfmlrktnujvza",
"oywcdpbveqhxryfmlgktnujdza",
"oiwcdpbsiqhxryfmqiktnujvza",
"obwcdhbseqhxryfmlgktnujvqa",
"oitcdpbseqhfryfmlyktnujvza",
"oiwcdpbseqhxryfmlnutnujqza",
"oiwcdpbseqhxnyfmlhktnujtza",
"oiwcdpbseqhbryfmlgkunuwvza",
"oiwcopbseqhiryfmlgktnkjvza",
"oiwcdpsseqhxryfklrktnujvza",
"oiwcdpsrsqhxryfmlgktnujvza",
"oiwcdpbsyqrxryfmlgktnujvzc",
"ojwcepbseqhxryfmlgktnujvfa",
"oiwcdpbseqhxrlfmlgvtnujvzr",
"oiycdpbsethsryfmlgktnujvza",
"eiwcdpbseqwxryfmlgktnujcza",
"oiocdpbseqhxryfxlgktaujvza",
"qiwydpbseqhpryfmlgktnujvza",
"ziwcdpbseqhxryfmlgktsuuvza",
"oiwcdpbseqheryfmygxtnujvza",
"oiwidpbseqhxryfulgktnujvzm",
"oiscdpdseqhxryfmlgktnujvya",
"oiwmypbseqhxryfmlgktnuxvza",
"oizcwbbseqhxryfmlgktnujvza",
"oiwcdpbseqpxryfmlgxfnujvza",
"oiwpdpbscqhxryxmlgktnujvza",
"oiwcdpbseqhxrifrlgkxnujvza",
"oiwcdpbsrqhxrifmlgktnzjvza",
"tiwcdpbseqhxryfmegkvjujvza",
"oiwcddbseqhxryfingktnujvza",
"oiwcdpbsiqhiryfmlgktnucvza",
"oiwcipbseqhxrkfmlgktnuvvza",
"kiwcdpbseqhxryfmlbkonujvza",
"qiwcdhbsedhxryfmlgktnujvza",
"siwcdpbseqhxryfmsgktnujvua",
"oqwcdpbseqhxryfmlyktndjvza",
"oiwcqnbseehxryfmlgktnujvza",
"oiwcdybseqhxryfmlgbtnujvia",
"oiwcdpbsejhxryfdlgktngjvza",
"oawcdpbseqhxrbfmlkktnujvza",
"oilcdpbseqhhrjfmlgktnujvza",
"oibcdpbseqhxryfmngktnucvza",
"niwcdpbseqhxryfmlgkuaujvza",
"oiwcdpbseqhxryfmqgmtnujvha",
"oiwcdpbseqhcryfxlgktnzjvza",
"oiwcdpaseqhxryfmqgktnujvzl",
"oiwcdpbseqhxjyfmlgkonujvzx",
"oiwmdzbseqlxryfmlgktnujvza",
"oiwhdpbsexhxryfmlgktnujvzw",
"oiwctpbseqhxryfmlgktnummza",
"oiwcdpbseqoxrydmlgktnujvoa",
"oiwkdpvseqhxeyfmlgktnujvza",
"oixcdpbsemhxryfmlgctnujvza",
"oimcdpbseqhxryfmlgktnujvlr",
"oiwcdpbseehxrywmlgktnejvza",
"oiwcdpbseqoxhyfmlgktnujyza",
"oiwcdpbsethxryfmlgktnrjvxa",
"oiwcdpbxeqhxryfmlgktnrjvzb",
"ogeadpbseqhxryfmlgktnujvza",
"eiwcdpbseqhxryfmlgktnvuvza",
"oiwcdpbseqhxryfmlgktnujaxv",
"siwcdpbsuqhxryfmlgktnuavza",
"oixcdpbseqhxryfmlgatnujvzy",
"oiwcdpbzeghmryfmlgktnujvza",
"oiwcdpbieqhxryfmlgktyujvzr",
"oiwcdpbseqhxeyfhlgktngjvza",
"oiwcdpbseqhjoyrmlgktnujvza",
"iiwcdpbseqhxryfmwhktnujvza",
"oixcdpbsiqhxryfmagktnujvza",
"oiwcdpfljqhxryfmlgktnujvza",
"oivcdpbseqhxrqfmlgktnujvca",
"ovwcdpbseqhxzyfmlgkenujvza",
"oiwxdpgseqhxryfmlgktnhjvza",
"oibcdpbbeohxryfmlgktnujvza",
"oiwcrpbseqhxrygmlgwtnujvza",
"jiwcdpbseqkxryfmlgntnujvza",
"oiwcdbbseqhxrywmlgktnujvra",
"oiwcdpbteqyxoyfmlgktnujvza",
"oiwcdjbsvqvxryfmlgktnujvza",
"obwcdukseqhxryfmlgktnujvza",
"oifcdpdseqhxryfmlgktnujsza",
"oiwcdpbseqhxryfalgktnujyda",
"oiwcwpbseqhxrnfmkgktnujvza",
"oswcdpbsethcryfmlgktnujvza",
"oiwcdpbieqhxryfmlgktnuoiza",
"oiwcdibsehhxryfmzgktnujvza",
"oisjdpbseqhxryfmfgktnujvza",
"oiwcjpbseqkxqyfmlgktnujvza",
"obwcdpbshqhgryfmlgktnujvza",
"oiwcspbseqhxryxmlgktnujvzl",
"oiwcdvbswqhxryfmlgklnujvza",
"oiwcdhuseqhxryfmlgdtnujvza",
"oiwcdpbkeqdxryfmlgktnujvzv",
"oiwcdpzseqhxcyfmlgksnujvza",
"oiwcdpbseqhxryfmbkkvnujvza",
"qiwcdpbseqhxrnfmlgktnujvha",
"okwcdpbseqhxryfmdgktgujvza",
"oiwcdpbkeqhxryfmldktnujvzu",
"oiwctpxseqhxgyfmlgktnujvza",
"oiwcdpbseqhxrykmlgktnujita",
"oiwcdpbseqhxryfmldktyujnza",
"oiwcdpbszqhxrjfmlgktnuqvza",
"oiwcdpbeeqhxrykmlgktnujrza",
"oiwcvpbseqhxryhmlgwtnujvza",
"oiwcdpbpeehxryfmlgktnujvzz",
"oiwcdbbsxqhxyyfmlgktnujvza",
"oiwkdpbseqhxryfplgktnujeza",
"opwcdpbseqhxdyfmlgctnujvza",
"oowcdpbseqhnryfmlgktnujvga",
"oawzdibseqhxryfmlgktnujvza",
"oiwcdpbfeqzxrjfmlgktnujvza",
"oiwcdpbseqaxryfmlgkonulvza",
"oiacdpbseqvxryfmlgktvujvza",
"oiwudpbseqhxryfwlgktnujvka",
"oiwcdpbjeqhxryfymgktnujvza",
"oiwcdpbweqhxrynmlgktnujaza",
"oiwcdpbseqdxryfclgvtnujvza",
"oiwcdppseqhxryfmlgmtzujvza",
"oiwcdpbseqhxrhfelektnujvza",
"kiwcdpbsnqhxryfmegktnujvza",
"oiwcdpbseqpxryfmlgzwnujvza",
"eiwcdpbseqnxryfplgktnujvza",
"oiwcdbbseqhxryfmlmktnujvha",
"oiwcdpbseqhxryfmlgktjhjvka",
"oiwcdpbseqhxnyfylgktnujvzs",
"oiwcdpbbxqhxryfmzgktnujvza",
"opwcdpbseqhfryfmlgktnujzza",
"oiwcdpbsjqpxryfmtgktnujvza",
"oiwcdpbseqhyqbfmlgktnujvza",
"oxwcdpbseqhxrffmlgktiujvza",
"oiwcdpbseqhxgyfmlgytnujvzq",
"oiwidpbseqhxryfmlgxtnujvzd",
"oiwcdpbshqhxryzmlpktnujvza",
"oifcdpbseqbxryfmlgktdujvza",
"biwcdzbseqhxtyfmlgktnujvza",
"oiwcdpbswqhxryfmlgutnujvca",
"xiwcdpbseqhxryxmlnktnujvza",
"oiwcdpzseqhxryfrlgktdujvza",
"oiwudpbseqhxryfmlgkqnurvza",
"oiwqdpbseihiryfmlgktnujvza",
"iiwjdpbseqhxryamlgktnujvza",
"oiwcdplseqhqryfmmgktnujvza",
"oiwcdppseqhxrmfmlgklnujvza",
"oiwcdobseqhxryfmmgkttujvza",
"odwcdpbseqhxryfmlgktnujvyk",
"oiwcdpkseqhxrhfmlgktntjvza",
"oiocdpbseqhxryfmlgjknujvza",
"oiicdpbieqhxryfmlgksnujvza",
"oiwcdpbseqhxryemlgktnujdla",
"oiwcdpbseqdxryfmlgktsujvzt",
"oiwcdcksnqhxryfmlgktnujvza",
"oowcdpbseqhxryfmlgsfnujvza",
"oawcdpbseqhxryfmljktnuevza",
"oiwcdpbsaqhxrffmzgktnujvza",
"oiwcipbseqhcryfmlgktnujvga",
"oiwcdpbsewhxrbfmlgktnuuvza",
"oiwcdpbsewhxryfmlgkunujvzc",
"oiwcdpbseqhxryfmlgktiujkga",
"jiwcdpbseqhxrlfmlgktnurvza",
"tiwcdpbseqoxryfmliktnujvza",
"oiwcdpbsenhxryfmlgkskujvza",
"oiwcdpbseqhxvyfmlhktoujvza",
"oiwcdpbseqhxeyfmlgmtnunvza",
"oiwcdpbseqhxdyfmloktnujvzu",
"oiwcdpbseqgxryfmlgkynejvza",
"oudcdpbseqhxryfmlgktmujvza",
"oiwcdpbseqhxryfmvgktnucvzc",
"oiwcdpbseqhxrysalgwtnujvza",
"odwodpbseqhgryfmlgktnujvza",
"oiwcdpbseqheryzmlgktnujgza",
"oiwcdpbseqhxryfalgwtnujvba",
"oiwcdpbseqhxryfmlgtdnuhvza",
"oiocdpbseqhxrefulgktnujvza",
"kiwcdpbseqhxrywolgktnujvza",
"niwcdpbseksxryfmlgktnujvza",
"oiwcdybseqexryfalgktnujvza",
"oiwcdpbbeqhxryamlgktnujpza",
"oiecdqbseqhxryfmlgktnujcza",
"oiwcdpbsqqhxlyfmlpktnujvza",
"oiwcdpbsaqheryfmlgktnujlza",
"oiecdpbseqhxryfmlgkknujvzz",
"oiwcapbsdqhxryfmlgktvujvza",
"ojwcdxbseqhxryfmlgktrujvza",
"oiwhdpbseqvxrzfmlgktnujvza",
"oiwcdppseqhtryfmlgktnujvzs",
"oikcdpbsfqhxryfmdgktnujvza",
"owwczpbseqhxryfilgktnujvza",
"oifwdpbseqhxryfmlgktnujfza",
"oowcdpbseqhxrprmlgktnujvza",
"oiwcapbseqhxryfmjgktnujvze",
"oiwcdpaseqhdrybmlgktnujvza",
"tiwcdpbseqhxryfmlgkvjujvza",
"xiwcdpbseqhoryfmlgktnujvqa",
"eiwrdpbsyqhxryfmlgktnujvza",
"oiwcdpbseqhxranmlgktnujvzt",
"oiwcdpbseqhxryfqlgktnudaza",
"oiwcdpbsvqhxrywmlgktnsjvza",
"oewcdpbseqhxryfmlgkunujvma",
"oiwcdpbseqhjrywmlgktnujvzb",
"omwcdpbseqhxryfmlgktwujsza",
"oiwcdpbyxqhxryfmlgrtnujvza",
"oiwidpbseqhxryfhlgktnunvza",
"oqwcdpbweqhxrybmlgktnujvza",
"oiwcdqbseqhxryfrlgktnujfza",
"oiacdpbseqhdryfmlgktaujvza",
"oiwcdpbstqhxmyfmlgktyujvza",
"oiwcdpbseqhxeyfclgktjujvza",
"wiwcdpeseqhxryfmlgktnujvzx",
"viwcdpbseqhxryfmlgvtvujvza",
"oircdpbseqhxcyfmlgktnujvma",
"miwcdpbseqtwryfmlgktnujvza",
"oiwcppbseqhxcyfmlgxtnujvza",
"giwcrpbseqhxryfmlgktnudvza",
"onwcvpbseqhxryfmlgktnujqza",
"oiwcipbseqhxryfmlgitnuqvza",
"oiwcdpbseqhxryjmlgkonufvza",
"oiwnwpbseqhxtyfmlgktnujvza",
"oiwcypbseqhxryfmlgetnujvzv",
"oiwcdpbseqhxryqmljktnkjvza",
"olwcdpbseqhxryfmlgkenujvba",
"biwcdpbseqwxrywmlgktnujvza",
"oiwcdpbsevhmryjmlgktnujvza",
"oiwcdpbseqhxryfmlzktnkjvzv",
"oiwudpbseqhxrefmlgktnujvia",
"oiicdpbseqhxryfdloktnujvza",
"oihcjpbsxqhxryfmlgktnujvza"
]

 const wordsMatch = (wordOne, wordTwo) => {
        let countOfNotTheSame = 0, index = 0, differentIndex

        while(countOfNotTheSame < 2 && index < wordOne.length){
            if(wordOne[index] === wordTwo[index]){
                index++
            }else{
                countOfNotTheSame++
                differentIndex = index
                index++
            }
        }
        
        if(countOfNotTheSame > 1){
            return {ok: false}
        }
        else{
            return {ok: true, differentIndex}
        }
    }

    const testWords = [
    "test",
    "okay",
    "test"
]


    it("should just test that one thing", async () =>{


let appearsTwoTimes=0, appearsThreeTimes=0, keysAndValues={}, keys, twosArray, threesArray, indexFound


const output = inputVals.map(word => {
    for(let letter of word){
        
        keys = Object.keys(keysAndValues)

        indexFound = keys.findIndex(i => { return i === letter})
        if(indexFound === -1){
            keysAndValues[letter] = 1
        }

        if(indexFound >=0){
            keysAndValues[letter]++
        }

     }

        twosArray = Object.values(keysAndValues).filter(twos => twos === 2)
        threesArray = Object.values(keysAndValues).filter(threes => threes === 3)
        if(twosArray.length >0){
            appearsTwoTimes++
        }

        if(threesArray.length>0){
            appearsThreeTimes++
        }
         keysAndValues={}
    })
    const result = appearsTwoTimes * appearsThreeTimes
    console.log(`result: `, result)

})

it("should find the correct box by comparing which words are only one character off", async () =>{
     let result, different, wordsMatchResult
   
    for(let j = 0; j < inputVals.length; j++){
        for(let z = j+1; z < inputVals.length; z++){
            wordsMatchResult = wordsMatch(inputVals[j], inputVals[z])
            if(wordsMatchResult.ok){
                const list = inputVals[j].split('')
                list.splice(wordsMatchResult.differentIndex,1)
                console.log(`Found matching word: `, inputVals[j], inputVals[z], list.join(''))
                 j=inputVals.length
                break;
            }
           
        }
    }
})

})
