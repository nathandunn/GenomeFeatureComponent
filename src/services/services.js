class ApolloService 
{
    /*
    * ApolloService Class
    * 
    */
    constructor(){ }

    GetIsoformTrack(url){
        return new Promise((resolve, reject) =>{
            fetch(url).then((response) => {
                resolve(response.json())
            }).catch(error => {
                reject(error);
            })
        });
    }

    GetLocalSequence(build, chromosome, start, end){
        let url = "http://demo.genomearchitect.org/Apollo2/sequence/Human-Hg38/chr" + chromosome + ":" + start + ".." + end
        return new Promise((resolve, reject)=>{
            fetch(url).then((response) =>{
                resolve(response.text());
            }).catch(error =>{
                reject(error);
            })
        });
    }

    async GetVariants(build, tracks, chromosome, start, end){
        let variants = []
        if (tracks === undefined) {
            tracks = await this.GetTracksByType(build, "JBrowse/Store/SeqFeature/VCFTabix")
        }

        for (let track of tracks) {
            console.log(track);
            let data = await this.GetVariantsFromTrack(build, track['label'], chromosome, start, end);
            variants = variants.concat(data);
        }
        console.log("Variants fetched: ", variants);
        return variants;
    }

    GetVariantsFromTrack(build, trackLabel, chromosome, start, end){
        let url = "http://demo.genomearchitect.org/Apollo2" + "/vcf/" + encodeURI(build) + "/" + encodeURI(trackLabel) + "/" + chromosome + ":" + start + ".." + end + ".json";
        return new Promise((resolve, reject)=> {
            fetch(url).then((response) =>{
                resolve(response.json());
            }).catch(error =>{
                reject(error);
            })
        });
    }

    async GetTracksByType(build, filterType){
        let trackList = await this.GetTrackList(build);
        let filteredTracks = [];
        for (let track of trackList['tracks']) {
            if (track['storeClass'] === filterType) {
                filteredTracks.push(track)
            }
        }
        return filteredTracks;
    }

    GetTrackList(build){
        let url = "http://demo.genomearchitect.org/Apollo2/track/list/" + encodeURI(build);
        return new Promise((resolve, reject)=> {
            fetch(url).then((response) =>{
                resolve(response.json());
            }).catch(error =>{
                reject(error);
            })
        });
    }
    // Our variant endpoint should take a range on a chromosome
    // and return all the variants that fall within that range
    GetFakeVariants(chromosome, start, end){
        let fakeVariants = [
            {
                "position": 48515449,
                "ref": "G",
                "mutant":"A"
            },
            {
                "position": 48515458,
                "ref": "T",
                "mutant":"C"
            },
            {
                "position": 48515461,
                "ref": "A",
                "mutant":"G"
            },
            {
                "position": 48515500,
                "ref": "C",
                "mutant":"A"
            }
        ]
        return fakeVariants;
    }

    // Fake globll variant track
    GetFakeGlobalVariants(chromosome, start, end){
        let fakeVariants = [
            {
                "position": 75575916,
                "ref": "G",
                "mutant":"A"
            },
            {
                "position": 75575056,
                "ref": "T",
                "mutant":"C"
            },
            {
                "position": 75645056,
                "ref": "A",
                "mutant":"G"
            },
            {
                "position": 75655056,
                "ref": "C",
                "mutant":"A"
            }
        ]
        return fakeVariants;
    }
}

export { ApolloService }