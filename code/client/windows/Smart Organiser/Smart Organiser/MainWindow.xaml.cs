using Newtonsoft.Json;
using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Runtime.InteropServices;
using System.Security;
using System.Windows;
using System.Windows.Input;


namespace Smart_Organiser
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>

    public partial class MainWindow : Window
    {

        private Uri mainDB = new Uri("http://localhost:3000/"); //should be changed to match a mongoDB instance running on the server


        public MainWindow()
        {
            GetDbRefresh(mainDB);
            InitializeComponent();
        }
        private void GetDbRefresh(Uri db)
        {
            WebRequest request = WebRequest.Create(new Uri(mainDB, "api/list"));
            request.Method = "POST";
            WebResponse resp = request.GetResponse();
            StreamReader reader = new StreamReader(stream: resp.GetResponseStream());
            string jsonSTR = reader.ReadToEnd();
            dynamic json = JsonConvert.DeserializeObject(jsonSTR);
            resp.Close();

        }
        private void refreshDB_Click(object sender, RoutedEventArgs e)
        {
            GetDbRefresh(mainDB);
        }

        private void addToQueue_Click(object sender, RoutedEventArgs e)
        {

        }

        private void removeFromQueue_Click(object sender, RoutedEventArgs e)
        {
            if (Keyboard.Modifiers.HasFlag(ModifierKeys.Shift))
            {
                removeFromQueue_Click_All(sender, e);
            }
            else
            {
                MessageBox.Show("Standard Click");
            }
        }
        private void removeFromQueue_Click_All(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Shift Click");
        }
    }
    public class JSONresponse
    {
        public string _id { get; set; }
        public string name { get; set; }
        public string comment { get; set; }
        public string reference { get; set; }
    }
}
