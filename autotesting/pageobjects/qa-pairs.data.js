export const QA_PAIRS = [
    {
        testCaseName: "spaces",
        questionText: " ",
        answerText: " ",
    },
    {
        testCaseName: "long strings",
        questionText: "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm",
        answerText: "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm12345567890",
    },
    {
        testCaseName: "multistring answer",
        questionText: "Any question",
        answerText: "sator\narepo\ntenet\nopera\nrotas",
    },
    {
        testCaseName: "special characters",
        questionText: "!@#$%^&*(){}<>;?|/\n\t\"\'\\",
        answerText: "!@#$%^&*(){}<>;?|/\n\t\"\'\\",
    },
    {
        testCaseName: "unicode",
        questionText: "עברית",
        answerText: "עִבְרִית‎",
    }
];