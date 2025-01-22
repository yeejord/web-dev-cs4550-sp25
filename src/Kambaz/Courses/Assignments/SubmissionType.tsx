export default function SubmissionType() {
    return(
        <div id="wd-submission-entries">
            <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
              <br />
              <br />
              <label id="wd-entry-types">Online Entry Options</label>
              <br /> 
              <input type="checkbox" name ="check-type" id="wd-text-entry"/>
                <label htmlFor="wd-entry-types">Text Entry</label><br />
              <input type="checkbox" name ="check-type" id="wd-website-url"/>
                <label htmlFor="wd-entry-types">Website URL</label><br />
              <input type="checkbox" name ="check-type" id="wd-media-recordings"/>
                <label htmlFor="wd-entry-types">Media Recordings</label><br />
              <input type="checkbox" name ="check-type" id="wd-stuent-annotation"/>
                <label htmlFor="wd-entry-types">Student Annotation</label><br />
              <input type="checkbox" name ="check-type" id="wd-file-upload"/>
                <label htmlFor="wd-entry-types">File Uploads</label><br />
              
        </div>
    );
}