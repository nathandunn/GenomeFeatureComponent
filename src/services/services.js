class ApolloService {
    /*
    * ApolloService Class
    *
    */
    constructor(baseUrl) {
        // set URL for Apollo instance
        this.baseUrl = baseUrl;
    }

    GetIsoformTrack(url) {
        // TODO: use baseUrl
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                resolve(response.json())
            }).catch(error => {
                reject(error);
            })
        });
    }

    GetLocalSequence(build, chromosome, start, end) {
        let url = this.baseUrl + "/sequence/" + build + "/" + chromosome + ":" + start + ".." + end
        return new Promise((resolve, reject) => {
            fetch(url, {mode: 'no-cors'}).then((response) => {
                resolve(response.text());
            }).catch(error => {
                reject(error);
            })
        });
    }

    async GetVariants(build, tracks, chromosome, start, end) {
        let variants = []
        if (tracks === undefined) {
            tracks = await this.GetTracksByType(build, "JBrowse/Store/SeqFeature/VCFTabix")
        }

        for (let track of tracks) {
            let data = await this.GetVariantsFromTrack(build, track, chromosome, start, end);
            variants = variants.concat(data);
        }
        console.log("Variants fetched: ", variants);
        return variants;
    }

    GetVariantsFromTrack(build, trackLabel, chromosome, start, end) {
        let url = this.baseUrl + "/vcf/" + encodeURI(build) + "/" + encodeURI(trackLabel) + "/" + chromosome + ":" + start + ".." + end + ".json";
        return new Promise((resolve, reject) => {
            fetch(url, {mode: 'no-cors'}).then((response) => {
                resolve(response.json());
            }).catch(error => {
                reject(error);
            })
        });
    }

    async GetTracksByType(build, filterType) {
        let trackList = await this.GetTrackList(build);
        let filteredTracks = [];
        for (let track of trackList['tracks']) {
            if (track['storeClass'] === filterType) {
                filteredTracks.push(track)
            }
        }
        return filteredTracks;
    }

    GetTrackList(build) {
        let url = this.baseUrl + "/track/list/" + encodeURI(build);
        return new Promise((resolve, reject) => {
            fetch(url, {mode: 'no-cors'}).then((response) => {
                resolve(response.json());
            }).catch(error => {
                reject(error);
            })
        });
    }
}

export {ApolloService}
