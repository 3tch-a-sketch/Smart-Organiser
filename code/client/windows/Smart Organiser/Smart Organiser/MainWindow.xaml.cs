using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Smart_Organiser
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>

    public partial class MainWindow : Window
    {

        private string mainDB = "localhost:27017"; //should be changed to match a mongoDB instance running on the server



        public MainWindow()
        {
            GetDbRefresh(mainDB);
            InitializeComponent();
        }
        private void GetDbRefresh(string db)
        {
            Console.WriteLine(db);
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
}
