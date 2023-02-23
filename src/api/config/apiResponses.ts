export const apiResponse = (response: any) => {
    // specify response code, example:
    if (response.status == 200) {
        console.log("response 200:", response);
        return response.data;
    } else {
        throw new Error(response.message);
    }
}