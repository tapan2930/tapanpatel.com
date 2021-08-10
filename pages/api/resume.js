import CloudConvert from 'cloudconvert';
const cloudConvert = new CloudConvert(process.env.CLOUDCONVERTKEY);
export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Process a POST request
        let sendPdf = await cloudConvert.jobs.create({
            "tasks": {
                "pdf": {
                    "operation": "capture-website",
                    "url": "https://pateltapan.com/resume?resumeOnly=true",
                    "output_format": "pdf",
                    "engine": "chrome",
                    "pages": "1",
                    "zoom": 1,
                    "margin_top": 0,
                    "margin_bottom": 0,
                    "margin_left": 0,
                    "margin_right": 0,
                    "print_background": true,
                    "display_header_footer": false,
                    "wait_until": "load",
                    "wait_time": 0,
                    "engine_version": "90",
                    "filename": "Tapan-Resume.pdf"
                },
                "export-1": {
                    "operation": "export/url",
                    "input": [
                        "pdf"
                    ],
                    "inline": false,
                    "archive_multiple_files": false
                }
            }
        });

        let getPdf = await cloudConvert.jobs.wait(sendPdf.tasks[1].job_id);

        const exportTask = getPdf.tasks.filter(
            task => task.operation === 'export/url' && task.status === 'finished'
        )[0];

        const file = exportTask.result.files[0];

        return res.status(200).json({file:file.url});
      } else {
        res.status(400).json({ message: 'Only Get Request Accepted' })
      }
  }