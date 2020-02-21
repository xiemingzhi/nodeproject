const {google} = require('googleapis');

// Each API may support multiple version. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
// message: 'API key not valid. Please pass a valid API key.'
// enable blogger api https://console.cloud.google.com/apis/library/blogger.googleapis.com?filter=category:blog-cms&id=97b21ba4-1cd6-4e5c-969b-207c4d63b2cd&project=your-project-id
// get key https://console.developers.google.com/apis/credentials?pli=1&project=your-project-id&folder=&organizationId=
const blogger = google.blogger({
  version: 'v3',
  auth: 'your-project-api-key',
  blogId: '7509702359905317932'

});

const params = {
  blogId: '7509702359905317932'
};

async function runSample() {
    const res = await blogger.blogs.get(params);
    console.log(`The blog url is ${res.data.url}`);
    //console.log(res.data.posts);
    const resposts = await blogger.posts.list(params);
    //console.log('print object')
    console.log(resposts.data)
}
runSample().catch(console.error);
