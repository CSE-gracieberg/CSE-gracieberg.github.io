const getResources = async () => {
    const url = "../resources.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("Error loading resources:", error);
    }
};

const showResources = async () => {
    const resources = await getResources();
    console.log(resources);
};

showResources();