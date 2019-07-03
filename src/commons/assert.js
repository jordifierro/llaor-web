const assert = condition => {
    if (!condition) {
        throw Error("Assertion failed");
    }
};

export default assert;
